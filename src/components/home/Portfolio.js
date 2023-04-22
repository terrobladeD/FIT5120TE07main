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
            tag: 'Career Insights',
            title: 'Job Matching',
        },
        {
            img: portfolio_2,
            tag: 'Skill Development',
            title: 'Skill Recommendations',
        },
        {
            img: portfolio_3,
            tag: 'Growth Opportunities',
            title: 'Career Pathways',
        },
        {
            img: portfolio_4,
            tag: 'Industry Trends',
            title: 'Future Job Prospects',
        }
    ]
    const navigate = useNavigate();
    return (
        <div id="portfolio" className="portfolio section">
            <Container>
                <Row>
                    <Col lg={5} md={7} sm={10}>
                        <div className="sectionTopDescription topSide">
                            <span className="shape">Job Check</span>
                            <h2>Discover Your Potential</h2>
                            <p>
                                Uncover valuable insights into your current job or interests, and receive personalized suggestions for skills development and potential job opportunities. Stay ahead in your career with guidance tailored to your unique goals and aspirations.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    navigate('/portfoliothree');
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
