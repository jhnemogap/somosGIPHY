import React from "react";
import { useSelector } from "react-redux";
import { Container, Alert } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";

const Home = () => {
  const { searchString } = useSelector((state) => state);

  return (
    <main>
      <Container fluid>
        {searchString ? <p>Resultados para &quot;{searchString}&quot;</p> : <p />}
      </Container>
      {searchString ? (
        <ResultsGrid />
      ) : (
        <Alert variant="success" className="text-center py-5">
          <Alert.Heading>
            <h1>Busca los Gifs que más te gustan</h1>
          </Alert.Heading>
        </Alert>
      )}
    </main>
  );
};

export default Home;
