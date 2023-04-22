/* eslint-disable camelcase */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { abLine, about_1, circle } from '../../assets/img';
import classes from './aboutUs.module.css';

function AboutUs() {
    return (
        <div id="aboutUs" className="aboutUs section">
            <Container>
                <Row>
                    <div className="sectionCenterTitle mobile-show">
                        <h2>Insights About Our Company</h2>
                    </div>
                </Row>
                <Row className="align-items-center">
                    <Col lg={6} md={12} className="order-lg-2">
                        <div className={`${classes.aboutUsImg}`}>
                            <img src={about_1} alt="about-1" />
                            <img src={circle} className={`${classes.circle}`} alt="circle" />
                            <img src={abLine} className={`${classes.abLine}`} alt="circle" />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className={`${classes.aboutUsLeft}`}>
                            <div className="sectionTopDescription">
                                <span className="shape mobile-hide">About Us</span>
                                <h2 className="mobile-hide">Insights About Our Company</h2>
                                <p>
                                    Let our experts prepare a free home analysis for you! Just fill
                                    out our form. Surround yourself with the luxury and quality of
                                    one of Saskatoon’s premier home builder. At Properties we take
                                    pride in building you everything you need to call The Meadows
                                    home.
                                </p>
                                <Link to="/about" className="readMoreBtn pink mt-lg-4">
                                    <span className="inline-flex me-2">
                                        <BsArrowRight />
                                    </span>
                                    Learn More
                                </Link>
                            </div>
                            <div className={`${classes.counterUpBox} mt-4`}>
                                <Row>
                                    <Col md={3} sm={6} className="mb-4">
                                        <div className={`${classes.singleCounterUp}`}>
                                            <p className={`${classes.counterTitle}`}>Projects</p>
                                            <CountUp
                                                className={`${classes.counterNumber}`}
                                                delay={2}
                                                end={27}
                                            />
                                        </div>
                                    </Col>
                                    <Col md={3} sm={6} className="mb-4">
                                        <div className={`${classes.singleCounterUp}`}>
                                            <p className={`${classes.counterTitle}`}>Campaigns</p>
                                            <CountUp
                                                className={`${classes.counterNumber}`}
                                                delay={2}
                                                end={18}
                                            />
                                        </div>
                                    </Col>
                                    <Col md={3} sm={6} className="mb-4">
                                        <div className={`${classes.singleCounterUp}`}>
                                            <p className={`${classes.counterTitle}`}>Events</p>
                                            <CountUp
                                                className={`${classes.counterNumber}`}
                                                delay={2}
                                                end={56}
                                            />
                                        </div>
                                    </Col>
                                    <Col md={3} sm={6} className="mb-4">
                                        <div className={`${classes.singleCounterUp}`}>
                                            <p className={`${classes.counterTitle}`}>Exellency</p>
                                            <CountUp
                                                className={`${classes.counterNumber}`}
                                                delay={2}
                                                end={13}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;
