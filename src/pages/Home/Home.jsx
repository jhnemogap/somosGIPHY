import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Alert } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";
import { setSearchResults } from "../../redux/actions";
import { getDataCallBack } from "../../utils/requests";
import { transformDataGifs } from "../../utils/transforms";
import { routeTopGifs } from "../../routes/paths";

const Home = () => {
  const [infoByRequest, setInfoByRequest] = useState([]);

  const { searchString, limitGifsRequest } = useSelector((state) => state);
  const dispatch = useDispatch();

  const URL_SEARCH_HOME = `${process.env.URL_API_SEARCH}&limit=${limitGifsRequest}&q=${searchString}`;

  useEffect(() => {
    if (searchString !== "" && searchString !== routeTopGifs().slice(1)) {
      setInfoByRequest([]);
      getDataCallBack(URL_SEARCH_HOME, (info) => setInfoByRequest(transformDataGifs(info)));
    }
  }, [searchString]);

  useEffect(() => {
    if (
      searchString !== "" &&
      searchString !== routeTopGifs().slice(1) &&
      infoByRequest.length > 0
    ) {
      dispatch(setSearchResults({ searchResults: infoByRequest }));
    }
  }, [infoByRequest]);

  return (
    <main>
      <Container fluid>
        {searchString ? <h3>Resultados para &quot;{searchString}&quot;</h3> : <p />}
      </Container>
      {searchString ? (
        <ResultsGrid urlApi={URL_SEARCH_HOME} offset={limitGifsRequest} />
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
