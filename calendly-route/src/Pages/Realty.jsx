import React from "react";
import Footer from "../Components/Footer";
import { Container, Row, Col, Figure, Card } from "react-bootstrap";
import b1 from "../images/b1.png";
import b2 from "../images/h3.jpg";
import b3 from "../images/c3.jpg";
import b4 from "../images/c4.jpg";
import b5 from "../images/c5.jpg";
import b6 from "../images/c6.jpg";

const Realty = () => {
  return (
    <div>
      <Container>
        <Row className="section">
          <Col xs={{ span: 4, offset: 1 }}>
            <h1>Private Jet Rentals</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="tellMe">
              <button className="btn btn-default btn-lg" type="submit">
                Private
              </button>
              <button className="btn btn-default btn-lg" type="submit">
                Commercial
              </button>
            </div>
          </Col>
          <Col xs={{ span: 4, offset: 1 }}>
            <Figure>
              <Figure.Image width={"100%"} height={180} alt="House" src={b1} />
            </Figure>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="section">
          <Col xs={{ span: "8", offset: "2" }}>
            <h5 className="text-center">
              We link owners with pre-approved buyers and renters
            </h5>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="section">
          <Col xs={{ span: 4, offset: 1 }}>
            <Figure>
              <Figure.Image width={"100%"} height={180} alt="House" src={b2} />
            </Figure>
          </Col>
          <Col xs={{ span: 4, offset: 1 }} className="write">
            <h4>Private Jet SALES</h4>
            <h1>Find your new Jet</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="sectionD">
          <h4 className="text-center">BROWSE OUR COLLECTION</h4>
          <h2>Recently added</h2>
          <Col>
            <Card>
              <Card.Img variant="top" src={b3} alt="House" />
              <Card.Body>
                <Card.Title>For Sale</Card.Title>
                <Card.Text>Gulfstream G550 $35 million</Card.Text>
                <button>View</button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={b4} alt="House" />
              <Card.Body>
                <Card.Title>For Sale</Card.Title>
                <Card.Text>Bombardier challenger 601-1A $15 million</Card.Text>
                <button>View</button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={b5} alt="House" />
              <Card.Body>
                <Card.Title>For Rent</Card.Title>
                <Card.Text>Gulfstream C200 $25 million</Card.Text>
                <button>View</button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={b6} alt="House" />
              <Card.Body>
                <Card.Title>For Sale</Card.Title>
                <Card.Text>Boeing 737 $45 million</Card.Text>
                <button>View</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Realty;
