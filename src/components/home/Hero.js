import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import {
    dot,
    heroCircle,
    a1,
    a2,
    ai,
    line,
} from '../../assets/img';
import classes from './hero.module.css';
import BtnPrimary from '../buttons/BtnPrimary';

function Hero() {
    return (
        <div id="hero" className="hero pt-100 pb-70 position-relative">
            <img src={dot} className={classes.dot} alt="dot" />
            <img src={line} className={classes.line} alt="line" />
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col lg={5} className="order-lg-2">
                        <div className={`${classes.heroContentBox} mobile-show`}>
                            <p className={`${classes.topSmallTitle} shape`}>
                                The Impact of <span>AI</span> on Employment
                            </p>
                            <h1 className={`${classes.heroTitle}`}>
                                Navigating the Future of Work for Junior Talent
                            </h1>
                        </div>
                        <div className={`${classes.heroImgBox}`}>
                            <Row className="mobile-hide">
                                <div className={`${classes.heroImgWrapper}`}>
                                    <div className={`${classes.smallImg}`}>
                                        <img src={a1} alt="" />
                                        <img src={a2} alt="" />
                                    </div>
                                    <div className={`${classes.bigImg}`}>
                                        <img src={ai} alt="" />
                                        <img
                                            src={heroCircle}
                                            className={classes.heroCircle}
                                            alt="hero-circle"
                                        />
                                    </div>
                                </div>
                            </Row>
                            <div className={`${classes.heroImg} mobile-show`}>
                                <img src={ai} alt="" />
                            </div>
                        </div>
                    </Col>


                    <Col lg={6}>
                        <div className={`${classes.heroContentBox}`}>
                            <p className={`${classes.topSmallTitle} shape mobile-hide`}>
                                The Impact of <span>AI</span> on Employment
                            </p>

                            <div className="mb-3">
                                <h5>Do you want to know the latest developments and trends in AI’s?</h5>

                                <BtnPrimary url="/info-center" title="Know More" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
