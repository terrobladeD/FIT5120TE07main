/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { blog_1, blog_2, blog_3, blog_4, blog_5, blog_6 } from '../../assets/img';

import classes from './HomeBlog.module.css';

function HomeBlog() {
    return (
        <div id="blog" className="blog section">
            <Container>
                <Row>
                        <Col md={8}>
                            <div className={`${classes.singleBlog} ${classes.singleBlogLg} mb-4`}>
                                <img src={blog_1} alt="" />
                                <div className={`${classes.blogContent} text-center mb-2`}>
                                    <Link to="/" className={classes.blogTitle}>
                                        Make The World A Better Place
                                    </Link>
                                    <div
                                        className={`${classes.dateBox} d-flex justify-content-center align-items-center gap-2`}
                                    >
                                        <p>February 27, 2022</p>
                                        <p>|</p>
                                        <Link to="/" className={classes.tagLink}>
                                            UX Case Study
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={`${classes.singleBlog} mb-4`}>
                                <img src={blog_2} alt="" />
                                <div className={`${classes.blogContent} text-center mb-2`}>
                                    <Link to="/" className={classes.blogTitle}>
                                        Make The World A Better Place
                                    </Link>
                                    <div
                                        className={`${classes.dateBox} d-flex justify-content-center align-items-center gap-2`}
                                    >
                                        <Link to="/" className={classes.tagLink}>
                                            UX Case Study
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`${classes.singleBlog} mb-4`}>
                                <img src={blog_3} alt="" />
                                <div className={`${classes.blogContent} text-center mb-2`}>
                                    <Link to="/" className={classes.blogTitle}>
                                        Make The World A Better Place
                                    </Link>
                                    <div
                                        className={`${classes.dateBox} d-flex justify-content-center align-items-center gap-2`}
                                    >
                                        <Link to="/" className={classes.tagLink}>
                                            UX Case Study
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                </Row>
                <Row>
                    <Col md={4}>
                            <div className={`${classes.singleBlog}  mb-4`}>
                                <img src={blog_4} alt="" />
                                <div className={`${classes.blogContent} text-center mb-2`}>
                                    <Link to="/" className={classes.blogTitle}>
                                        Make The World A Better Place
                                    </Link>
                                    <div
                                        className={`${classes.dateBox} d-flex justify-content-center align-items-center gap-2`}
                                    >
                                        <Link to="/" className={classes.tagLink}>
                                            UX Case Study
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    <Col md={4}>
                            <div className={`${classes.singleBlog} mb-4`}>
                                <img src={blog_5} alt="" />
                                <div className={`${classes.blogContent} text-center mb-2`}>
                                    <Link to="/" className={classes.blogTitle}>
                                        Make The World A Better Place
                                    </Link>
                                    <div
                                        className={`${classes.dateBox} d-flex justify-content-center align-items-center gap-2`}
                                    >
                                        <Link to="/" className={classes.tagLink}>
                                            UX Case Study
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    <Col md={4}>
                            <div className={`${classes.singleBlog} mb-4`}>
                                <img src={blog_6} alt="" />
                                <div className={`${classes.blogContent} text-center mb-2`}>
                                    <Link to="/" className={classes.blogTitle}>
                                        Make The World A Better Place
                                    </Link>
                                    <div
                                        className={`${classes.dateBox} d-flex justify-content-center align-items-center gap-2`}
                                    >
                                        <Link to="/" className={classes.tagLink}>
                                            UX Case Study
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomeBlog;
