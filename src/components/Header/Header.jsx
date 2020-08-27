import React from "react";
import { Container } from "react-bootstrap";

import NavbarComp from "../NavbarComp/NavbarComp";
import LogoComp from "../LogoComp/LogoComp";
import SearchComp from "../SearchComp/SearchComp";

const styles = {
  container: {
    padding: "16px",
  },
  logo: {
    display: "inline-block",
    marginBottom: "16px",
  },
};

const Header = () => {
  return (
    <header>
      <NavbarComp />
      <Container className="text-center" style={styles.container}>
        <LogoComp width="280px" styles={styles.logo} />
        <SearchComp />
      </Container>
    </header>
  );
};

export default Header;
