/* eslint-disable camelcase */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { heroCircle, progressImg } from '../../assets/img';
import ProgressBar from '../global/ProgressBar';
import classes from './progress.module.css';

function Progress() {
    const percentOne = 80;
    const percentTwo = 70;
    const percentThree = 90;
    return (
        <div id="progressBar" className="progressBar section">
            <Container>
                <Row>
                    <div className="sectionCenterTitle">
                        <h2>Let Us Tell You Why We Are The Best</h2>
                    </div>
                </Row>
                <Row className="align-items-center">
                    <Col lg={6} md={12} className="order-lg-2">
                        <div className={`${classes.progressImg}`}>
                            <img src={progressImg} alt="about-1" />
                            <img src={heroCircle} className={`${classes.circle}`} alt="circle" />
                            <div className={classes.counterBox}>
                                <p className={`${classes.counterTitle}`}>Exellency</p>
                                <CountUp
                                    className={`${classes.counterNumber}`}
                                    delay={2}
                                    end={13}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className={`${classes.progressLeft}`}>
                            <div className="sectionTopDescription">
                                <h2 className="mobile-hide">Let Us Tell You Why We Are The Best</h2>
                                <p>
                                    Let our experts prepare a free home analysis for you! Just fill
                                    out our form. Surround yourself with the luxury and quality of
                                    one of Saskatoon’s premier home builder.
                                </p>
                            </div>
                            <div className={classes.progressBarBox}>
                                <div className={classes.singleProgressBar}>
                                    <div className={classes.spTop}>
                                        <h4>Business Strategy</h4>
                                        <p>{percentOne}%</p>
                                    </div>
                                    <ProgressBar percentage={percentOne} />
                                </div>
                                <div className={classes.singleProgressBar}>
                                    <div className={classes.spTop}>
                                        <h4>UX/UI Design</h4>
                                        <h4>{percentTwo}%</h4>
                                    </div>
                                    <ProgressBar percentage={percentTwo} />
                                </div>
                                <div className={classes.singleProgressBar}>
                                    <div className={classes.spTop}>
                                        <h4>App Development</h4>
                                        <p>{percentThree}%</p>
                                    </div>
                                    <ProgressBar percentage={percentThree} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Progress;
