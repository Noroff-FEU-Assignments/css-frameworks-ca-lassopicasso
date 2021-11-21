import React from "react";

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./home/Home";
import News from "./news/News";
import Contact from "./contact/Contact";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContentNav() {
  return (
    <Router>
      <Navbar bg="secondary" expand="lg">
        <Container>
          <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/news" className="nav-link">
                News
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
            <Form className="d-flex navbar-search">
              <FormControl type="search" placeholder="Search" aria-label="Search" />
              <Button variant="outline-success">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default ContentNav;
