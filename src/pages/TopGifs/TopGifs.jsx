import React from "react";
import { Container } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";

const TopGifs = () => {
  return (
    <div>
      <Container fluid>
        <p>Top Gifs</p>
      </Container>
      <ResultsGrid />
    </div>
  );
};

export default TopGifs;
