import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";
import { setSearchString, setSearchResults } from "../../redux/actions";

const getData = async function (URL) {
  const data = await fetch(URL);
  const trending = await data.json();
  return trending;
};

const TopGifs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchString({ searchString: "trending-gifs" }));
    return () => dispatch(setSearchString({ searchString: "" }));
  }, []);

  useEffect(() => {
    const infoPromise = getData(process.env.URL_API_TRENDING);
    infoPromise
      .then((info) => dispatch(setSearchResults({ searchResults: info.data })))
      .catch((err) => console.error(err));
    return () => dispatch(setSearchResults({ searchResults: [] }));
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
