import React, { useState } from 'react';
import { Row, Col, Button, ListGroup } from 'react-bootstrap';
import Banner from '../global/Banner';
import { resumecheck } from '../../assets/img';

const ResumeCheck = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [skills, setSkills] = useState([]);
  const [courses, setCourses] = useState([]);

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
      // setFile(null);
      // e.target.reset();
    } else {
      console.log('Failed to upload file');
    }
  };

  const handleAccept = () => {
    const formData = new FormData();
    formData.append('file', file);
    fetch('https://airevolution.works/api/skills', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result.length > 0) {
          setSkills(data.result);
          // 调用获取课程的 API
          data.result.forEach((skill) => {
            fetch(`https://example.com/api/courses?skill=${encodeURIComponent(skill)}`)
              .then((response) => response.json())
              .then((courseData) => {
                setCourses((prevCourses) => [...prevCourses, ...courseData]);
              });
          });
        } else {
          console.log('出错了，请重试。');
        }
      });
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
        randomFacts={[
          "Do you know that Resume Check can help you optimize your resume to improve your chances of landing your dream job?",
          "Have you considered using Resume Check to identify the top skills you possess and how they can be highlighted in your resume?", "Are you aware that Resume Check uses AI to analyze your resume and provide feedback on how to improve it?", "Have you ever thought about the importance of having a well-optimized resume? Resume Check can be your key to success.", "Do you know that Resume Check can provide course recommendations based on your top skills to help you excel in your career?"
        ]}
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
                  <h4 style={{ textAlign: 'center', color: resultColor() }}>
                    {result.toUpperCase()}
                  </h4>
                  <Button variant="primary" onClick={handleAccept}>
                    Accept Recommendations
                  </Button>
                </>
              )}
            </Col>
          </Row>
          {skills.length > 0 && courses.length > 0 && (
            <Row>
              <Col>
                <h4>Recommended Courses</h4>
                <ListGroup>
                  {courses.slice(0, 5).map((course, index) => (
                    <ListGroup.Item key={index}>{course.title}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          )}
        </div>
      </Banner>
    </>
  );
};

export default ResumeCheck;
