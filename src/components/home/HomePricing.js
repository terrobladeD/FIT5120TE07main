/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './homePricing.module.css';

function HomePricing() {
    const [bgColor, setBgColor] = useState('');
    const [spanColor, setspanColor] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/hometwo') {
            setBgColor('bgGreen');
            setspanColor('spanGreen');
        } else if (location.pathname === '/homethree') {
            setBgColor('bgBlue');
            setspanColor('spanBlue');
        } else {
            setBgColor('bgPink');
            setspanColor('spanPink');
        }
    }, [location]);
    const navigate = useNavigate();
    const [isPrcingChecked, setIsPrcingChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsPrcingChecked(event.target.checked);
    };
    return (
        <div id="pricing" className="pricing section">
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="sectionTopDescription">
                            <span className="shape">Pricing</span>
                            <h2>The Best Pricing Plan</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <div
                            className={`${classes.checkbox} d-flex gap-3 align-items-center justify-content-center text-center`}
                        >
                            <p>Monthly</p>
                            <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    onChange={handleCheckboxChange}
                                />
                            </Form>
                            <p>Yearly</p>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <div className={`${classes.singlePricing}`}>
                            <div className={classes.pricingTopBox}>
                                <h3>Basic</h3>
                                <p>Most Popular</p>
                            </div>
                            <div className={classes.priceBox}>
                                {!isPrcingChecked && (
                                    <h3>
                                        <span>$</span>2.46<span>/mo</span>
                                    </h3>
                                )}
                                {isPrcingChecked && (
                                    <h3>
                                        <span>$</span>10.85<span>/yr</span>
                                    </h3>
                                )}
                                <p>
                                    Yearly <span>15% Off</span>
                                </p>
                            </div>
                            <div className={classes.pricngFeatures}>
                                <ul>
                                    <li>Unlimited Products</li>
                                    <li>Unlimited Products</li>
                                    <li>Unlimited Products</li>
                                    <li>Unlimited Products</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <button
                                    className={classes.buyBtn}
                                    type="button"
                                    onClick={() => navigate('/contact')}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <div
                            className={`${classes.singlePricing}  ${classes.secondChild} ${bgColor}`}
                        >
                            <div className={classes.pricingTopBox}>
                                <h3>Standard</h3>
                                <p>Recommended</p>
                            </div>
                            <div className={classes.priceBox}>
                                {!isPrcingChecked && (
                                    <h3>
                                        <span>$</span>5.75<span>/mo</span>
                                    </h3>
                                )}
                                {isPrcingChecked && (
                                    <h3>
                                        <span>$</span>22.40<span>/yr</span>
                                    </h3>
                                )}
                                <p>
                                    Yearly <span className={spanColor}>15% Off</span>
                                </p>
                            </div>
                            <div className={classes.pricngFeatures}>
                                <ul>
                                    <li>Unlimited Products</li>
                                    <li>Unlimited Products</li>
                                    <li>Unlimited Products</li>
                                    <li>Unlimited Products</li>
                                    <li>Unlimited Products</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <button
                                    className={classes.buyBtn}
                                    type="button"
                                    onClick={() => navigate('/contact')}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mb-4">
                        <div className={`${classes.singlePricing}`}>
                            <div className={classes.pricingTopBox}>
                                <h3>Premium</h3>
                                <p>Best Value</p>
                            </div>
                            <div className={classes.priceBox}>
                                {!isPrcingChecked && (
                                    <h3>
                                        <span>$</span>10.25<span>/mo</span>
                                    </h3>
                                )}
                                {isPrcingChecked && (
                                    <h3>
                                        <span>$</span>35.75<span>/yr</span>
                                    </h3>
                                )}
                                <p>
                                    Yearly <span>15% Off</span>
                                </p>
                            </div>
                            <div className={classes.pricngFeatures}>
                                <ul>
                                    <li>Unlimited Products</li>
                                    <li>Unlimited Products</li>
                                    <li>Unlimited Products</li>
                                    <li>Unlimited Products</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <button
                                    className={classes.buyBtn}
                                    type="button"
                                    onClick={() => navigate('/contact')}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePricing;
