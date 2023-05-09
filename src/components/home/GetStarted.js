/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from './aboutUs.module.css';

const features = [
    {
        id: 1,
        title: 'Job Check',
        question: 'Do you want to check job opportunities?',
        link: '/job-check',
    },
    {
        id: 2,
        title: 'Resume Check',
        question: 'Do you want to check your resume?',
        link: '/resume-check',
    },
    {
        id: 3,
        title: 'Industrial Analysis',
        question: 'Do you want to analyze the industry?',
        link: '/industrial-analysis',
    },
    {
        id: 4,
        title: 'Super Plan',
        question: 'Do you want to explore our Super Plan?',
        link: '/super-plan',
    },
];

function GetStarted() {
    const navigate = useNavigate();
    const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

    const handleFeatureHover = (index) => {
        setCurrentFeatureIndex(index);
    };

    const handleYesButtonClick = () => {
        const feature = features[currentFeatureIndex];
        navigate(feature.link);
    };

    const handleNoButtonClick = () => {
        if (currentFeatureIndex < features.length - 1) {
            setCurrentFeatureIndex(currentFeatureIndex + 1);
        }
    };

    return (
        <div id="aboutUs" className="aboutUs section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={12} md={12}>
                        <div className={`${classes.aboutUsLeft}`}>
                            <div className="sectionTopDescription">
                                <span className="shape mobile-hide">
                                    Check Our Features
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                    <Col lg={4} md={12} className={classes.featuresContainer}>
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                onClick={() => handleFeatureHover(index)}
                                className={`${classes.feature} ${
                                    currentFeatureIndex === index
                                        ? classes.featureActive
                                        : ''
                                }`}
                            >
                                {feature.title}
                            </div>
                        ))}
                    </Col>
                    <Col lg={7} md={12} style={{marginLeft:'80px'}}>
                        <div className="mb-3">
                            <h5>{features[currentFeatureIndex].question}</h5>
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default GetStarted;
