import React from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function ContactForm() {
  return (
    <Col className="form mt-3">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Label htmlFor="basic-url">Website</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3" className="d-none d-md-block">
            https://
          </InputGroup.Text>
          <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <div as="li" className="d-flex align-items-center">
          <Form.Check type="checkbox" />
          <div className="ps-2">Allow us to sell your personal details to whomever we want</div>
        </div>
        <Button className="mt-3 form__button" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
}

export default ContactForm;
