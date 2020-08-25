import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";
import { setSearchString } from "../../redux/actions";

const TopGifs = () => {
  const dispatch = useDispatch();
  dispatch(setSearchString({ searchString: "trending" }));

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
