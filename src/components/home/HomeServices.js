import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { service_1, service_2, service_3 } from '../../assets/img';
import classes from './singleService.module.css';

function HomeServices() {
    const navigate = useNavigate();

    const services = [
        {
            serviceImg: service_1,
            serviceTitle: 'Job Check',
            serviceText:
                'Assess your current job, interests, and skill set. Receive personalized recommendations to optimize your career growth.',
            targetPage: '/job-check',
        },
        {
            serviceImg: service_2,
            serviceTitle: 'Resume Check',
            serviceText:
                'Optimize your resume with our expert guidance to showcase your skills and experience effectively to potential employers.',
            targetPage: '/resume-check',
        },
        {
            serviceImg: service_3,
            serviceTitle: 'Info Center',
            serviceText:
                'Stay informed about the latest trends, opportunities, and challenges in your industry to make well-informed decisions.',
            targetPage: '/info-center',
        }
    ];

    return (
        <div id="services" className="section services">
            <Container>
                <Row>
                    <Col lg={5} md={7} sm={10}>
                        <div className="sectionTopDescription topSide">
                            <span className="shape">Guidance</span>
                            <h2>Plan for Future</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {services.map((service, index) => (
                        <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                            <div
                                className={`${classes.singleService} ${classes.boxShadow}`}
                                onClick={() => navigate(service.targetPage)}
                            >
                                <div className={classes.imgBox}>
                                    <img
                                        src={service.serviceImg}
                                        className={classes.serviceImg}
                                        alt={`service-${index}`}
                                    />
                                </div>
                                <h3 className={classes.serviceTitle}>{service.serviceTitle}</h3>
                                <p className={classes.serviceText}>{service.serviceText}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default HomeServices;
