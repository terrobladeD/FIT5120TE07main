import React, { useState, useEffect } from 'react';
import { Row, Col, Table, FormControl, ListGroup } from 'react-bootstrap';
import Banner from '../global/Banner';
import { jobcheck } from '../../assets/img';

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
                  <ListGroup style={{ position: 'absolute', zIndex: 1000, width: '100%'}}>
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
          <Row style={{paddingTop: '10px' }}>
            {jobInfo.length > 0 && (
              <>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Job</th>
                      <th>Skills</th>
                      <th>Potential Jobs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{selectedJob}</td>
                      <td>{jobInfo.slice(0, 3).join(', ')}</td>
                      <td>{jobInfo.slice(3).join(', ')}</td>
                    </tr>
                  </tbody>
                </Table>
              </>
            )}
          </Row>
        </div>
      </Banner>
    </>
  );

};

export default JobCheck;
