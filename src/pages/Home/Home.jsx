import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";

const Home = () => {
  const { searchString } = useSelector((state) => state);

  return (
    <main>
      <Container fluid>
        {searchString ? (
          <p>Resultados para &quot;{searchString}&quot;</p>
        ) : (
          <p>Sin busquedas aún</p>
        )}
      </Container>
      <ResultsGrid />
    </main>
  );
};

export default Home;
