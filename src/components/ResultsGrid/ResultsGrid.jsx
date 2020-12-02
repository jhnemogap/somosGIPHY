import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Container, Row, Image, Button } from "react-bootstrap";

import { getDataCallBack } from "../../utils/requests";
import { transformDataGifs } from "../../utils/transforms";
import { appendSearchResults } from "../../redux/actions";

const propsTypes = {
  urlApi: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
};

const ResultsGrid = (props) => {
  const { urlApi, offset } = props;

  const [showMore, setShowMore] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [infoByRequest, setInfoByRequest] = useState([]);

  const dispatch = useDispatch();
  const { heightImgGrid, searchResults } = useSelector((state) => state);

  const handleOnClick = () => {
    const newOffset = currentOffset + offset;
    const urlOffsetUpdate = `${urlApi}&offset=${newOffset}`;
    setCurrentOffset(newOffset);
    setShowMore(true);
    getDataCallBack(urlOffsetUpdate, (info) => setInfoByRequest(transformDataGifs(info)));
  };

  useEffect(() => {
    if (searchResults.length === 0) {
      setCurrentOffset(0);
    }
  }, [searchResults]);

  useEffect(() => {
    if (currentOffset !== 0 && showMore) {
      setShowMore(false);
      dispatch(appendSearchResults({ searchResults: infoByRequest }));
    }
  }, [infoByRequest]);

  return (
    <Container fluid style={{ marginBottom: "2em" }}>
      <Row className="mx-1 justify-content-center">
        {searchResults.map((item, index) => (
          <picture key={index.toString()} className="p-1">
            <source type="image/webp" srcSet={item.urls.webp} />
            <Image type="image/gif" height={heightImgGrid} src={item.urls.gif} alt={item.title} />
          </picture>
        ))}
      </Row>
      <Button
        type="button"
        variant="success"
        size="lg"
        block
        style={{ margin: "1em" }}
        onClick={handleOnClick}
      >
        MOSTRAR MÁS
      </Button>
    </Container>
  );
};

ResultsGrid.propTypes = propsTypes;

export default ResultsGrid;
