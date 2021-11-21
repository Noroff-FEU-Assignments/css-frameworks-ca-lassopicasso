import React from "react";

import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function ContactInfo() {
  return (
    <Col xs={12} md={{ span: 6, order: 2 }}>
      <ListGroup className="listgroup">
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center border-0 listgroup__item">
          <i class="fas fa-envelope fa-lg"></i>
          <div className="ms-3 me-auto">
            <div>hello@yay.com</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center border-0 listgroup__item">
          <i class="fas fa-phone fa-lg"> </i>
          <div className="ms-3 me-auto">
            <div>123 456 7890</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start border-0 listgroup__item">
          <i class="fas fa-map-marker-alt fa-lg listgroup__mapMarker"></i>
          <div className="ms-3 me-auto list-group-item-address">
            <div>123 Some Street</div>
            <div class>Somewhere</div>
            <div>Some City</div>
            <div>10000</div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  );
}

export default ContactInfo;
