import React, { useState, useEffect } from 'react';
import { Row, Col, Table, FormControl, ListGroup, Button } from 'react-bootstrap';
import Banner from '../global/Banner';
import { jobcheck } from '../../assets/img';
import { Link } from 'react-router-dom';
const randomFacts = [
  "Do you know that Job Check can help you understand your career's vulnerability to AI advancements?",
  "Have you considered using Job Check to discover alternative career paths that can maximize your potential?",
  "Job Check offers personalized insights into the skills required for your current job and other potential job options.",
  "Are you aware that Job Check can provide you with valuable information to make informed decisions about your career path?",
  "Have you ever thought about how AI might impact your current job? Job Check can give you the answers you're looking for."
];

const JobCheck = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [jobInfo, setJobInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    if (inputValue.length > 0) {
      setFilteredJobs(
        jobs
          .filter((job) => job[0].toLowerCase().includes(inputValue.toLowerCase()))
          .slice(0, 5)
      );
    } else {
      setFilteredJobs([]);
    }
  };

  const handleClick = (job) => {
    setSearchTerm(job);
    setSelectedJob(job);
    setFilteredJobs([]);
    handleSelect(job);
  };
  useEffect(() => {
    fetch('https://airevolution.works/api/joblist')
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  const handleSelect = (job) => {
    setSelectedJob(job);
    fetch(`https://airevolution.works/api/jobinfo?job=${encodeURIComponent(job)}`)
      .then((response) => response.json())
      .then((data) => setJobInfo(data));
  };


  return (
    <>
      <Banner
        pageTitle="Explore the Impact of AI on Your Career"
        smTitle="Check if your career is affected"
        breadcrumb="Job Check"
        aBackgroundImage={jobcheck}
        randomFacts={randomFacts}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '20px solid white',
          borderRadius: '10px',
          backgroundColor: 'white',
        }}>
          <Row>
            <Col xs="auto" className="my-auto">
              <div>Please select your job:</div>
            </Col>
            <Col xs="auto">
              <div style={{ position: 'relative' }}>
                <FormControl
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="Type your job here"
                />
                {filteredJobs.length > 0 && (
                  <ListGroup style={{ position: 'absolute', zIndex: 1000, width: '100%' }}>
                    {filteredJobs.map((job, index) => (
                      <ListGroup.Item key={index} onClick={() => handleClick(job[0])}>
                        {job[0]}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </div>
            </Col>
          </Row>
          <Row style={{ paddingTop: '10px' }}>
            {jobInfo.length > 0 && (
              <>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Current Job</th>
                      <th>Future Skills</th>
                      <th>Potential Jobs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{selectedJob}</td>
                      <td>{jobInfo.slice(1, 4).join(', ')}</td>
                      <td>{jobInfo.slice(4).join(', ')}</td>
                    </tr>
                  </tbody>
                </Table>
                <span>
                  <span>Check your Resume for further feedback &nbsp;&nbsp;&nbsp;</span>
                  <Link to="/resume-check">
                    <Button variant="primary">Go to Resume Check</Button>
                  </Link></span>

              </>
            )}
          </Row>
        </div>
      </Banner>
    </>
  );

};

export default JobCheck;
