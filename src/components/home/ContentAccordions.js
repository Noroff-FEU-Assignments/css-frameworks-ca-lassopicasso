import React from "react";

import Accordion from "react-bootstrap/Accordion";

function ContentAccordions() {
  return (
    <Accordion defaultActiveKey="0" className="d-md-none accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body className="accordion__body">
          <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
          <div className="d-block w-100 tab-img" style={{ backgroundImage: "url(images/tab/tab-1.jpg)" }}></div>
          <div className="d-flex justify-content-center align-items-center social-media">
            <div>SHARE</div>
            <div>
              <i class="fab fa-facebook-f"></i>
            </div>
            <div>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Second</Accordion.Header>
        <Accordion.Body className="accordion__body">
          <p>Morbi2 eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
          <div className="d-block w-100 tab-img" style={{ backgroundImage: "url(images/tab/tab-2.jpg)" }}></div>
          <div className="d-flex justify-content-center align-items-center social-media">
            <div>SHARE</div>
            <div>
              <i class="fab fa-facebook-f"></i>
            </div>
            <div>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Third</Accordion.Header>
        <Accordion.Body className="accordion__body">
          <p>Morbi3 eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
          <div className="d-block w-100 tab-img" style={{ backgroundImage: "url(images/tab/tab-3.jpg)" }}></div>
          <div className="d-flex justify-content-center align-items-center social-media">
            <div>SHARE</div>
            <div>
              <i class="fab fa-facebook-f"></i>
            </div>
            <div>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ContentAccordions;
