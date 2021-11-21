import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";

function ContentTabs() {
  return (
    <>
      <Accordion defaultActiveKey="0" className="d-md-none">
        <Accordion.Item eventKey="0">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>
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
          <Accordion.Body>
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
          <Accordion.Body>
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
      <div className="d-none d-md-block pb-5">
        <Tabs defaultActiveKey="0" id="uncontrolled-tab-example">
          <Tab eventKey="0" title="First">
            <Row>
              <Col lg={3} md={5}>
                <div className="d-block w-100 tab-img" style={{ backgroundImage: "url(images/tab/tab-1.jpg)" }}></div>
              </Col>
              <Col className="tab-info">
                <div>
                  <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                </div>
                <div className="d-flex justify-content-between align-items-center social-media">
                  <div className="text-uppercase">share</div>
                  <div className="ms-3">
                    <i class="fab fa-facebook-f"></i>
                  </div>
                  <div className="ms-3 me-auto">
                    <i class="fab fa-twitter"></i>
                  </div>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="1" title="Second">
            <Row>
              <Col lg={3} md={5}>
                <div className="d-block w-100 tab-img" style={{ backgroundImage: "url(images/tab/tab-2.jpg)" }}></div>
              </Col>
              <Col className="tab-info">
                <div className="pb-5">
                  <p>Morbi2 eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                </div>
                <div className="d-flex justify-content-between align-items-center social-media">
                  <div className="text-uppercase">share</div>
                  <div className="ms-3">
                    <i class="fab fa-facebook-f"></i>
                  </div>
                  <div className="ms-3 me-auto">
                    <i class="fab fa-twitter"></i>
                  </div>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="2" title="Third">
            <Row>
              <Col lg={3} md={5}>
                <div className="d-block w-100 tab-img" style={{ backgroundImage: "url(images/tab/tab-3.jpg)" }}></div>
              </Col>
              <Col className="tab-info">
                <div className="pb-5">
                  <p>Morbi3 eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                </div>
                <div className="d-flex justify-content-between align-items-center social-media">
                  <div className="text-uppercase">share</div>
                  <div className="ms-3">
                    <i class="fab fa-facebook-f"></i>
                  </div>
                  <div className="ms-3 me-auto">
                    <i class="fab fa-twitter"></i>
                  </div>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default ContentTabs;
