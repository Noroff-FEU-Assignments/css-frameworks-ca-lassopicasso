import React from "react";
import Container from "react-bootstrap/Container";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function News() {
  return (
    <Container className="mt-4">
      <h1>News</h1>
      <ButtonToolbar className="mt-4" aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button active>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
        </ButtonGroup>
      </ButtonToolbar>
      <Row xs={1} md={4} className="g-4 mt-2">
        <Col>
          <Card>
            <Card.Img variant="top" src="images/news/news-1.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="images/news/news-2.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="images/news/news-3.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="images/news/news-4.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-none d-md-block">
          <Card>
            <Card.Img variant="top" src="images/news/news-5.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-none d-md-block">
          <Card>
            <Card.Img variant="top" src="images/news/news-6.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-none d-md-block">
          <Card>
            <Card.Img variant="top" src="images/news/news-7.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-none d-md-block">
          <Card>
            <Card.Img variant="top" src="images/news/news-8.jpg" />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2 mt-4" aria-label="First group">
          <Button active>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </Container>
  );
}

export default News;
