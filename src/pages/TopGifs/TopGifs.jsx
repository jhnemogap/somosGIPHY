import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Badge } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";
import { setSearchString, setSearchResults } from "../../redux/actions";
import { getDataCallBack } from "../../utils/requests";
import { transformDataGifs } from "../../utils/transforms";
import { routeTopGifs } from "../../routes/paths";

const TopGifs = () => {
  const [infoByRequest, setInfoByRequest] = useState({ data: [] });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchString({ searchString: routeTopGifs().slice(1) }));
  }, []);

  useEffect(() => {
    if (infoByRequest.data.length === 0) {
      getDataCallBack(process.env.URL_API_TRENDING, setInfoByRequest);
    } else {
      dispatch(setSearchResults({ searchResults: transformDataGifs(infoByRequest) }));
    }
  }, [infoByRequest]);

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
