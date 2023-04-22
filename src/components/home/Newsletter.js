import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { HiArrowNarrowRight } from 'react-icons/hi';
import classes from './newsletter.module.css';

function Newsletter() {
    const [email, setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    return (
        <div id="newsletter" className="newsletter section bgPink">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8} sm={12}>
                        <div className={classes.newsletterBox}>
                            <h3>Subscribe To The Newsletter.</h3>
                            <p>
                                Subscribe is an option offered by product vendors or service
                                providers that allows customers.
                            </p>
                            <div className={classes.subsciptionBox}>
                                <Form.Control
                                    type="email"
                                    id="sub-email"
                                    className={classes.subInput}
                                    placeholder="Example@gmail.com"
                                    value={email}
                                    onChange={handleEmail}
                                />
                                <button type="submit" className="btnPrimary d-none d-md-block">
                                    Subscription
                                </button>
                                <button type="submit" className="btnPrimary d-md-none">
                                    <HiArrowNarrowRight />
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Newsletter;
