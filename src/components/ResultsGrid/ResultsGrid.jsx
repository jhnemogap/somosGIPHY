import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const ResultsGrid = () => {
  const { heightImgGrid, searchResults } = useSelector((state) => state);

  return (
    <Container fluid>
      <Row>
        {searchResults.map((item, index) => (
          <Col key={index.toString()}>
            <img src={item.img} height={heightImgGrid} alt={`item ${index} ${1}`} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResultsGrid;
