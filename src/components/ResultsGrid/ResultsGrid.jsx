import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";

const ResultsGrid = () => {
  const { heightImgGrid, searchResults } = useSelector((state) => state);

  return (
    <Container fluid>
      <Row>
        {searchResults.map((item, index) => (
          <Col key={index.toString()} className="text-center py-1">
            <picture>
              <source type="image/webp" srcSet={item.urls.webp} />
              <Image type="image/gif" height={heightImgGrid} src={item.urls.gif} alt={item.title} />
            </picture>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResultsGrid;
