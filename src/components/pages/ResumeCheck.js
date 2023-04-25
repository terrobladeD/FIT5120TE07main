import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Banner from '../global/Banner';
import { bannerBg } from '../../assets/img';

const ResumeCheck = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    // Dummy API call
    const response = await fetch('https://api.example.com/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('File uploaded successfully');
    } else {
      console.log('Failed to upload file');
    }
  };

  return (
    <>
      <Banner
        pageTitle="Optimize Your Resume with AI"
        smTitle="Improve your chances of success"
        breadcrumb="Resume Check"
        aBackgroundImage={bannerBg}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '20px solid white',
            borderRadius: '10px',
            backgroundColor: 'white',
          }}
        >
          <Row>
            <Col>
              <h3>Upload your resume</h3>
              <p>Accepted formats: Word (.doc, .docx) or PDF (.pdf)</p>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fileUpload">Upload your resume:</label>
                  <input
                    type="file"
                    id="fileUpload"
                    name="file"
                    accept=".doc,.docx,.pdf"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </form>
            </Col>
          </Row>
        </div>
      </Banner>
    </>
  );
};

export default ResumeCheck;
