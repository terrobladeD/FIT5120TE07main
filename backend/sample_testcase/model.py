import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn import preprocessing
import pandas as pd

import io
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.converter import TextConverter
from pdfminer.layout import LAParams
from pdfminer.pdfpage import PDFPage



def pdf_to_text(pdf_path):
    resource_manager = PDFResourceManager()
    output_string = io.StringIO()
    laparams = LAParams()
    with open(pdf_path, 'rb') as fh:
        interpreter = PDFPageInterpreter(resource_manager, TextConverter(resource_manager, output_string, laparams=laparams))
        for page in PDFPage.get_pages(fh, caching=True, check_extractable=True):
            interpreter.process_page(page)
    text = output_string.getvalue()
    output_string.close()
    return text

#read data part need been change
pdf_file = 'high-mid.pdf'
text_content = pdf_to_text(pdf_file)
text_content = text_content.replace('\n', ' ')
model_input = [text_content]




#put in same dir
data = pd.read_csv('new_resume_data.csv')
tokenizer = tf.keras.preprocessing.text.Tokenizer()
tokenizer.fit_on_texts(data["Resume_str"])
data["numeral_Resume_str"] = tokenizer.texts_to_sequences(data["Resume_str"])
numeral_Description_pad = tf.keras.preprocessing.sequence.pad_sequences(data["numeral_Resume_str"], padding='post', truncating= 'post', maxlen= 39000)
le= preprocessing.LabelEncoder()
le.fit(data["label"])
numeral_labels = np.array(le.transform(data["label"]))
#load model
#put in same dir
model_dir = 'resume_classification_model_old'
loaded_model = tf.keras.models.load_model(model_dir)

test_data = model_input
numeral_test_data = tokenizer.texts_to_sequences(test_data)
padded_test_data = pad_sequences(numeral_test_data, padding='post', truncating='post', maxlen=39000)

predictions = loaded_model.predict(padded_test_data)
predicted_labels = le.inverse_transform(np.argmax(predictions, axis=1))


#return part need changed
print(predicted_labels)