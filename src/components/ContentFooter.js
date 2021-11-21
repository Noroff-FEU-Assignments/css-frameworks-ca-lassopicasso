import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContentFooter() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-center text-md-start ">
            <i class="fab fa-vimeo-v fa-lg"></i>
            <i class="fab fa-youtube fa-lg"></i>
          </Col>
          <Col xs={6} md={4} className="text-md-center">
            hello@yay.com
          </Col>
          <Col xs={6} md={4} className="text-end">
            Copyright 2021
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default ContentFooter;
