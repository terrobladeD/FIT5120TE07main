import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import classes from './banner.module.css';

function Banner(props) {
  const { pageTitle, smTitle, breadcrumb, aBackgroundImage, randomFacts } = props;

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    return randomFacts[randomIndex];
  };

  return (
    <div
      className={`${classes.topBanner} mb-5`}
      style={{ backgroundImage: `url(${aBackgroundImage})` }}
    >
      <Container className={classes.containerScrollable}>
        <Row className="align-items-start">
          <Col md={12}>
            <div className={classes.bannerBreadcrumb}>
              <Breadcrumb className={classes.mainBreadcrumb}>
                <Breadcrumb.Item className={classes.breadcrumbItem} href="#">
                  {breadcrumb}
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className={classes.bannerTitle}>
              <span className="shape">{smTitle}</span>
              <h2>{pageTitle}</h2>
            </div>
          </Col>
        </Row>
        <Row className="flex-grow-1">
          <Col md={12} className="d-flex align-items-center justify-content-center">
            {props.children}
          </Col>
        </Row>
        {randomFacts && (
          <Row className={classes.displayButtom}>
            <Col md={12} className="d-flex align-items-center justify-content-center mt-3">
              <p className={classes.randomFact}>{getRandomFact()}</p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Banner;
