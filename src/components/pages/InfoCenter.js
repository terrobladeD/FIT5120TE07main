import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const InfoCenter = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        'https://newsapi.org/v2/everything?q=artificial intelligence&apiKey=0a9a82c94a774f44895d71617d9cca4b'
      );
      const data = await response.json();
      setNewsList(data.articles.slice(0, 5));
    };
    fetchNews();
  }, []);

  if (!newsList.length) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>AI News Info Center</h2>
          <p>
            Discover the latest news and breakthroughs in the field of Artificial Intelligence. Stay up-to-date with the most recent developments, research, and innovations in the world of AI.
          </p>
        </Col>
      </Row>
      {newsList.map((news, index) => (
        <Card key={index} className="mb-4">
          <Row className="align-items-center">
            <Col xs={4}>
              <img
                src={news.urlToImage}
                alt={news.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Col>
            <Col xs={8}>
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
                <Button
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Read More
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default InfoCenter;
