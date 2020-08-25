import React from "react";
import { Container } from "react-bootstrap";

import NavbarComp from "../NavbarComp/NavbarComp";
import LogoComp from "../LogoComp/LogoComp";
import SearchComp from "../SearchComp/SearchComp";

const styles = {
  container: {
    padding: "16px",
    textAlign: "center",
  },
  logo: {
    display: "inline-block",
    marginBottom: "8px",
  },
};

const Header = () => {
  return (
    <header>
      <NavbarComp />
      <Container style={styles.container}>
        <LogoComp stylesProps={styles.logo} />
        <SearchComp />
      </Container>
    </header>
  );
};

export default Header;
