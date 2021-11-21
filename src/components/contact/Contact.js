import React from "react";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container className="mt-4">
      <Row className="mt-4">
        <ContactInfo />
        <h1>Submit your details</h1>
        <ContactForm />
      </Row>
    </Container>
  );
}

export default Contact;
