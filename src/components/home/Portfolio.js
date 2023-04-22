import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import classes from './portfolio.module.css';
import {
    portfolio_1,
    portfolio_2,
    portfolio_3,
    portfolio_4,
} from '../..//assets/img';

function Portfolio() {
    const portfolios = [
        {
            img: portfolio_1,
            tag: 'Retirement Planning',
            title: 'Investment Strategies',
        },
        {
            img: portfolio_2,
            tag: 'Financial Management',
            title: 'Savings Optimization',
        },
        {
            img: portfolio_3,
            tag: 'Risk Assessment',
            title: 'Asset Protection',
        },
        {
            img: portfolio_4,
            tag: 'Pension Solutions',
            title: 'Annuity Options',
        }
    ]
    const navigate = useNavigate();
    return (
        <div id="portfolio" className="portfolio section">
            <Container>
                <Row>
                    <Col lg={5} md={7} sm={10}>
                        <div className="sectionTopDescription topSide">
                            <span className="shape">SuperPlan</span>
                            <h2>Secure Your Future</h2>
                            <p>
                                Ensure a comfortable retirement with SuperPlan, a personalized superannuation strategy designed to help you maximize your savings and investments. Achieve financial stability and peace of mind as you transition into your golden years, knowing you're well-prepared for the journey ahead.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    navigate('/super-plan');
                                }}
                                className="readMoreBtn pink mt-lg-4"
                            >
                                <span className="inline-flex me-2">
                                    <BsArrowRight />
                                </span>
                                Learn More
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {portfolios.map((portfolio, index) => (
                        <Col md={6} sm={12} key={index} className="mb-4">
                            <div className={`${classes.singlePortfolio}`}>
                                <img src={portfolio.img} alt="" />
                                <div className={`${classes.portfolioContent}`}>
                                    <span>{portfolio.tag}</span>
                                    <h2>{portfolio.title}</h2>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Portfolio;
