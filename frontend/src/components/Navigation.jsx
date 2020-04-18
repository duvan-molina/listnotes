import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand>Note App</Navbar.Brand>
        <Nav className=" justify-content-end">
          <Link to="/">Notas</Link>
          <Link to="/create-notes">Crear Nota</Link>
          <Link to="/users">Crear usuario</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
