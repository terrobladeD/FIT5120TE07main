import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SuperPlan = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p>This is the Tools List</p>
          <Button variant="primary">Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SuperPlan;