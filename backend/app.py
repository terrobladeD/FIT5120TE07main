from flask import Flask,jsonify,request,render_template
from flask_cors import CORS
import mysql.connector
import re
from pdfminer.high_level import extract_text
import docx2txt
import io
import requests
from new_backup import extract_dates

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route('/news', methods=['GET'])
def get_news():
    try:
        response = requests.get(
            'https://newsapi.org/v2/everything?q=artificial intelligence&apiKey=0a9a82c94a774f44895d71617d9cca4b'
        )
        return response.json()

    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500

@app.route('/joblist', methods=['GET'])
def get_job_list():
    try:
        # Connect to MySQL database
        cnx = mysql.connector.connect(user='root', password='Qwer1234!',
                                      host='localhost', database='db')
        # Retrieve a random row from the test table
        cursor = cnx.cursor()
        cursor.execute('SELECT current_job FROM jobrole')
        result = cursor.fetchall()

        # Return the random row as a JSON object
        response = jsonify(result)
        return response

    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500

    finally:
        # Close database connection
        if cnx:
            cnx.close()

@app.route('/jobinfo', methods=['GET'])
def get_job_info():
    try:
        job_filter = request.args.get('job')

        # Connect to MySQL database
        cnx = mysql.connector.connect(user='root', password='Qwer1234!',
                                      host='localhost', database='db')
        cursor = cnx.cursor()
        query = "SELECT * FROM jobrole WHERE current_job = %s"
        cursor.execute(query, (job_filter,))
        result = cursor.fetchone()

        # Return the random row as a JSON object
        response = jsonify(result)
        return response

    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500

    finally:
        # Close database connection
        if cnx:
            cnx.close()


def pdf_to_text(file_bytes):
    return extract_text(io.BytesIO(file_bytes))

def docx_to_text(file_bytes):
    return docx2txt.process(io.BytesIO(file_bytes))

@app.route('/resume', methods=['POST'])
def process_resume():
    uploaded_file = request.files.get('file')

    # Check if the file has a pdf, doc, or docx extension
    file_name = uploaded_file.filename
    if not re.match(r'^.*\.(pdf|doc|docx)$', file_name, re.IGNORECASE):
        return jsonify({"result":"Wrong file!"})

    # Read the uploaded file content as bytes
    file_content_bytes = uploaded_file.read()

    # Extract text from the binary file depending on its extension
    file_extension = file_name.split('.')[-1].lower()
    if file_extension == 'pdf':
        file_content_string = pdf_to_text(file_content_bytes)
    elif file_extension in ['doc', 'docx']:
        file_content_string = docx_to_text(file_content_bytes)
    else:
        return jsonify({"result": "Unsupported file format"})

    # Process the file content string
    res = extract_dates(file_content_string)
    # Call other functions using the file_content_string

    # random_result = random.choice(["low", "medium", "high"])
    return jsonify({"result": res})




if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


