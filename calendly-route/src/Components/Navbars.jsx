import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <div>
      <Navbar expand="lg" className="navBar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">
                <Navbar.Brand to="/" className="white">
                  Home
                </Navbar.Brand>
              </Link>
              <Link to="construction" className="white">
                Construction
              </Link>
              <Link to="realty" className="white">
                Aircrafts
              </Link>
              <Link to="propmanagement" className="white">
                Aircraft Management
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
