import React, { useState } from 'react';
import { Row, Col, Button, ListGroup, Card } from 'react-bootstrap';
import Banner from '../global/Banner';
import { resumecheck } from '../../assets/img';

const CourseCard = ({ course }) => {
  return (
    <Card className="mb-4">
      <Row className="align-items-center">
        <Col xs={4}>
          <img
            src={course.image}
            alt={course.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Col>
        <Col xs={8}>
          <Card.Body>
            <Card.Title>{course.name}</Card.Title>
            <Card.Text>{course.headline}</Card.Text>
            <Button variant="primary" href={course.url} target="_blank">
              Know More
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};


const ResumeCheck = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [skills, setSkills] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);


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
          setTimeout(() => {
            const currentScrollY = window.scrollY;
            window.scrollTo({
              top: currentScrollY + 300,
              behavior: 'smooth'
            });
          }, 500);

        } else {
          console.log('skills error。');
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
      return 'orange';
    } else if (result.includes('HIGH')) {
      return 'red';
    } else {
      return 'black';
    }
  };

  const handleSkillClick = (skill) => {
    setCourses([]);
    setSelectedSkill(skill);
    fetch(`https://airevolution.works/api/course?skill=${encodeURIComponent(skill)}`, {
    })
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setTimeout(() => {
          const currentScrollY = window.scrollY;
          window.scrollTo({
            top: currentScrollY + 300,
            behavior: 'smooth'
          });
        }, 500);
      })

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
        bannerColor="orange"
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
                  {(result.includes('LOW') || result.includes('MID') || result.includes('HIGH')) &&
                    (
                      <span>
                        <span>Do you want to receive more learning resources relates to your skills?</span>

                        <Button style={{marginLeft:'10px'}}variant="primary" onClick={handleAccept}>
                          Yes Please
                        </Button>
                      </span>
                    )}
                </>
              )}
            </Col>
          </Row>

        </div>
      </Banner>
      <div style={{ margin: '8px' }}>
        {skills.length > 0 ? (
          <Row>
            <Col>
              <h4>Your Skills are the Following</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {skills.map((skill, index) => (
                  <Button key={index} variant="outline-primary" onClick={() => handleSkillClick(skill)} style={{ margin: '5px' }}>
                    {skill}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        ) : result !== null && (
          <div style={{ justifyContent: 'center' }}> No skills setracted. Please use another resume.</div>
        )}

        {selectedSkill && courses.length > 0 ? (
          <Row>
            <Col>
              <h4>Recommended Courses for {selectedSkill}</h4>
              <ListGroup>
                {courses.map((course, index) => (
                  <ListGroup.Item key={index}>
                    <CourseCard course={course} />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        ) : (
          skills.length > 0 && <p>Select a skill to view recommended courses.</p>
        )}
      </div>


    </>
  );
};

export default ResumeCheck;
