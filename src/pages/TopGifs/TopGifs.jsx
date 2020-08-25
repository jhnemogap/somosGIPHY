import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";
import { setSearchString } from "../../redux/actions";

const TopGifs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchString({ searchString: "trending" }));
    return () => dispatch(setSearchString({ searchString: "" }));
  }, []);

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
