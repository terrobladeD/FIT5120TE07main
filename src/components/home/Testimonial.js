/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import testimonials from '../../constants/testimonialData';
import classes from './testimonial.module.css';

function Testimonial() {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <BsArrowRight />,
        prevArrow: <BsArrowLeft />,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div id="testimonial" className="testimonial section bgLightPink">
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="sectionTopDescription topSide mb-5">
                            <span className="shape">Testimonials</span>
                            <h2>Customers Talk About Us</h2>
                            <p>
                                Customer support represents the resources within your company that
                                provide technical assistance to consumers after they purchase a
                                product or service.
                            </p>
                        </div>
                    </Col>
                </Row>
                <div className={`${classes.testimonialSlider}`}>
                    <div>
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div className={classes.singleTestimonial} key={index}>
                                    <p className={`${classes.testimonialText}`}>
                                        {testimonial.msg}
                                    </p>
                                    <div className={classes.testimonialBottom}>
                                        <div className={classes.writerImg}>
                                            <img src={testimonial.img} alt="" />
                                        </div>
                                        <div className={classes.testimonialBio}>
                                            <h4 className={classes.writerName}>
                                                {testimonial.name}
                                            </h4>
                                            <p className={classes.writerPost}>{testimonial.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Testimonial;
