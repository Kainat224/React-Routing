import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/home" className="text-white text-decoration-none">
              Navbar
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="mx-4 text-white text-decoration-none" to="/home">
              Home
            </Link>
            <Link
              className="mx-4 text-white text-decoration-none"
              to="/features"
            >
              Features
            </Link>
            <Link
              className="mx-4 text-white text-decoration-none"
              to="/todoslist"
            >
              TodosList
            </Link>
            <Link
              className="mx-4 text-white text-decoration-none"
              to="/pricing"
            >
              Pricing
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
