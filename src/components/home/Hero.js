import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
    dot,
    heroCircle,
    a1,
    a2,
    ai,
    line,
} from '../../assets/img';
import classes from './hero.module.css';

const questions = [
    // Add yesLink and noAction properties to each question object
    {
        id: 1,
        question: 'Have you want to know the trend of AI?',
        yesLink: '/info-center',
        noAction: 'next',
    },
    {
        id: 2,
        question: 'Do you want to know how it affects you?',
        yesLink: '/job-check',
        noAction: 'next',
    },
    {
        id: 3,
        question: 'Do you want to know how deeply your career has been affected by AI?',
        yesLink: '/resume-check',
        noAction: 'showExploreMessage',
    }
];

function Hero() {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showExploreMessage, setShowExploreMessage] = useState(false);


    const handleYesButtonClick = () => {
        const question = questions[currentQuestionIndex];
        navigate(question.yesLink);
    };

    const handleNoButtonClick = () => {
        const question = questions[currentQuestionIndex];
        if (question.noAction === 'next') {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowExploreMessage(true);
        }
    };

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

                            <div>
                                {questions.slice(0, currentQuestionIndex + 1).map((question, index) => (
                                    <div key={question.id} className="mb-3">
                                        <h5>{question.question}</h5>
                                        {index === currentQuestionIndex && (
                                            <>
                                                <Button
                                                    variant="outline-primary"
                                                    onClick={handleYesButtonClick}
                                                    style={{ marginRight: '2vw' }}
                                                >
                                                    Yes
                                                </Button>
                                                <Button
                                                    variant="outline-secondary"
                                                    className="ml-2"
                                                    onClick={handleNoButtonClick}
                                                >
                                                    No
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                ))}
                                {showExploreMessage && (
                                    <h4 >
                                        Please feel free to explore our site.
                                    </h4>
                                )}
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
