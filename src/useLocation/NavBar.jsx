import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <>
      <Nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Nav.Link class="navbar-brand" href="#">
            Logo
          </Nav.Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Nav.Link class="nav-link active" aria-current="page" href="#">
                  Home
                </Nav.Link>
              </li>
              <li class="nav-item">
                <Nav.Link class="nav-link" href="#">
                  Features
                </Nav.Link>
              </li>
              <li class="nav-item">
                <Nav.Link class="nav-link" href="#">
                  Pricing
                </Nav.Link>
              </li>
              <NavDropdown title="Courses" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">ReactJs</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Mearn Stack</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Web 3.0</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  Metaverse Development
                </NavDropdown.Item>
              </NavDropdown>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default NavBar;
