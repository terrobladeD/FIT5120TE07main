import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown, Table } from 'react-bootstrap';
import Banner from '../global/Banner';
import { bannerBg } from '../../assets/img';

const JobCheck = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [jobInfo, setJobInfo] = useState([]);

  useEffect(() => {
    fetch('http://54.252.71.19:5000/joblist')
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  const handleSelect = (job) => {
    setSelectedJob(job);
    fetch(`http://54.252.71.19:5000/jobinfo?job=${encodeURIComponent(job)}`)
      .then((response) => response.json())
      .then((data) => setJobInfo(data));
  };

  return (
    <>
      <Banner
        pageTitle="Explore the Impact of AI on Your Career"
        smTitle="Check if your career is affected"
        breadcrumb="Job Check"
        aBackgroundImage={bannerBg}
      />
      <Container>
        <Row>
          <Col>
            <Row>
              <Col xs="auto" className="my-auto">
                <div>Please select your job:</div>
              </Col>
              <Col xs="auto" >
                <Dropdown onSelect={handleSelect} >
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {selectedJob || 'Select a Job'}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {jobs.map((job, index) => (
                      <Dropdown.Item key={index} eventKey={job[0]}>
                        {job[0]}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobCheck;
