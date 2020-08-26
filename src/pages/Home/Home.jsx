import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Alert } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";
import { setSearchResults } from "../../redux/actions";
import { getDataCallBack } from "../../utils/requests";
import { transformDataGifs } from "../../utils/transforms";
import { routeTopGifs } from "../../routes/paths";

const Home = () => {
  const [infoByRequest, setInfoByRequest] = useState({ data: [] });

  const { searchString } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      searchString !== "" &&
      searchString !== routeTopGifs().slice(1) &&
      infoByRequest.data.length === 0
    ) {
      getDataCallBack(`${process.env.URL_API_SEARCH}&q=${searchString}`, setInfoByRequest);
    } else if (infoByRequest.data.length !== 0) {
      dispatch(setSearchResults({ searchResults: transformDataGifs(infoByRequest) }));
    }
  }, [searchString, infoByRequest]);

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
