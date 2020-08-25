import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import { routeTopGifs } from "../../routes/paths";

const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="mr-auto">
          <Nav.Item>
            <Link to={routeTopGifs()} className="btn-outline-light">
              Top Gifs
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
