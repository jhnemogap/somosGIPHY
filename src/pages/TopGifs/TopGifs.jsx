import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Badge } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";
import { setSearchString, setSearchResults } from "../../redux/actions";
import { getDataCallBack } from "../../utils/requests";
import { transformDataGifs } from "../../utils/transforms";

const TopGifs = () => {
  const [infoPromise, setInfoPromise] = useState({ data: [] });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchString({ searchString: "trending-gifs" }));
  }, []);

  useEffect(() => {
    if (infoPromise.data.length === 0) {
      getDataCallBack(process.env.URL_API_TRENDING, setInfoPromise);
    } else {
      dispatch(setSearchResults({ searchResults: transformDataGifs(infoPromise) }));
    }
  }, [infoPromise]);

  return (
    <main>
      <Container fluid>
        <h4>
          <Badge variant="light">Top Gifs</Badge>
        </h4>
      </Container>
      <ResultsGrid />
    </main>
  );
};

export default TopGifs;
