import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Badge } from "react-bootstrap";

import ResultsGrid from "../../components/ResultsGrid/ResultsGrid";
import { setSearchString, setSearchResults } from "../../redux/actions";

const getData = async function (URL) {
  const data = await fetch(URL);
  const trending = await data.json();
  return trending;
};

const transformDataGifs = function (info) {
  const images = info.data.map((img) => ({
    urls: {
      webp: `https://i.giphy.com/media/${img["id"]}/giphy.webp`,
      gif: `https://i.giphy.com/${img["id"]}.gif`,
    },
    title: img["title"],
  }));
  return images;
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
      .then((response) => transformDataGifs(response))
      .then((dataClean) => dispatch(setSearchResults({ searchResults: dataClean })))
      .catch((err) => console.error(err));
    return () => dispatch(setSearchResults({ searchResults: [] }));
  }, []);

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
