import React from "react";
import { Container } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";

const Home = () => {
  return (
    <main>
      <Container fluid>
        <p>Resultados para &quot;Nada aún&quot;</p>
      </Container>
      <ResultsGrid />
    </main>
  );
};

export default Home;
