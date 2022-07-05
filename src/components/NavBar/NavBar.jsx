import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function NavBar() {
  const { getProductsTotal } = useContext(CartContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>Quality Artworks</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/categoria/Remera">Remeras</NavLink>
            <NavLink to="/categoria/Buzo">Buzos</NavLink>
          </Nav>
        </Navbar.Collapse>
        {getProductsTotal() ? (
          <>
            <h2>{getProductsTotal()}</h2>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </>
        ) : null}
      </Container>
    </Navbar>
  );
}
