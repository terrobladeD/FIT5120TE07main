import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Banner from '../global/Banner';
import { resumecheck } from '../../assets/img';

const ResumeCheck = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
  
    const response = await fetch('https://airevolution.works/api/resume', {
      method: 'POST',
      body: formData,
    });
  
    if (response.ok) {
      const data = await response.json();
      setResult(data.result);
      setFile(null);
      e.target.reset();
    } else {
      console.log('Failed to upload file');
    }
  };

  const resultColor = () => {
    if (!result) {
      return 'black';
    }
  
    if (result.includes('LOW')) {
      return 'green';
    } else if (result.includes('MID')) {
      return 'aqua';
    } else if (result.includes('HIGH')) {
      return 'red';
    } else {
      return 'black';
    }
  };

  return (
    <>
      <Banner
        pageTitle="Optimize Your Resume with AI"
        smTitle="Improve your chances of success"
        breadcrumb="Resume Check"
        aBackgroundImage={resumecheck}
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
              {result && (
                <>
                  <h3 style={{ textAlign: 'center', color: resultColor() }}>
                    {result.toUpperCase()}
                  </h3>
                </>
              )}
            </Col>
          </Row>
        </div>
      </Banner>
    </>
  );
};

export default ResumeCheck;
