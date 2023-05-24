import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import h1 from "../images/b1.png";
import h2 from "../images/b3.jpg";
import h3 from "../images/b4.jpg";
import h4 from "../images/b5.png";
import h5 from "../images/b6.png";
import h6 from "../images/b7.jpg";

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row className="sectionOne">
          <Col xs={{ span: 4, offset: 1 }}>
            <div className="comname">
              <h1>
                {" "}
                <span style={{ color: "midnightblue" }}>Skywall Aviation</span>
              </h1>
              <h4>
                Enter your email and an agent will get in touch within 24 hours.
              </h4>
            </div>
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <img src={h1} alt="House" className="firsti"></img>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="sectionTwo">
          <h1>
            {" "}
            <span style={{ color: "midnightblue" }}>Skywall Aviation</span>
          </h1>
          <Col className="flex-container">
            <img src={h2} alt="Logo" height="50px" width="100px" />
            <img src={h3} alt="Logo" height="50px" width="100px" />
            <img src={h4} alt="Logo" height="50px" width="100px" />
            <img src={h5} alt="Logo" height="50px" width="100px" />
            <img src={h6} alt="Logo" height="50px" width="100px" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="sectionThree">
          <Col>
            <Row>
              <Col>
                <h3>Airport Construction</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col>
                <h3>Private Jet Sales</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col>
                <h3>Aircraft Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
