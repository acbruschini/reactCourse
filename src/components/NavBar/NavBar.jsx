import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"; //Ver de importarlo diferente
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
        <Navbar.Brand >Quality Artworks</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/categoria/Remera">Remeras</NavLink>
            <NavLink to="/categoria/Buzo">Buzos</NavLink>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}
