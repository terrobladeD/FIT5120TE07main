/* eslint-disable import/named */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import classes from './banner.module.css';

function Banner(props) {
    const { pageTitle, smTitle, breadcrumb, aBackgroundImage} = props;
    return (
        <div
            className={`${classes.topBanner} mb-5`}
            style={{ backgroundImage: `url(${aBackgroundImage})` }}
        >
            <Container>
                <Row>
                    <Col md={8}>
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
            </Container>
        </div>
    );
}

export default Banner;
