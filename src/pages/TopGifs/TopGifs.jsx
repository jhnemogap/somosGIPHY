import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Badge } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";
import { setSearchString, setSearchResults } from "../../redux/actions";
import { getDataCallBack } from "../../utils/requests";
import { transformDataGifs } from "../../utils/transforms";
import { routeTopGifs } from "../../routes/paths";

const TopGifs = () => {
  const [infoByRequest, setInfoByRequest] = useState([]);

  const limitGifsRequest = useSelector((state) => state.limitGifsRequest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchString({ searchString: routeTopGifs().slice(1) }));
  }, []);

  useEffect(() => {
    if (infoByRequest.length === 0) {
      getDataCallBack(`${process.env.URL_API_TRENDING}&limit=${limitGifsRequest}`, (info) =>
        setInfoByRequest(transformDataGifs(info))
      );
    } else {
      dispatch(setSearchResults({ searchResults: infoByRequest }));
    }
  }, [infoByRequest]);

  return (
    <main>
      <Container fluid>
        <h1>
          <Badge variant="light">Top Gifs</Badge>
        </h1>
      </Container>
      <ResultsGrid />
    </main>
  );
};

export default TopGifs;
