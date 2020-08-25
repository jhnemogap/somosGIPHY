import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Test constants
const listGif = [
  { img: "https://media.giphy.com/media/2zozXhK8u6xvV560SG/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
  { img: "https://media.giphy.com/media/2zozXhK8u6xvV560SG/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9HDdEWq7rAs1hu/giphy.gif" },
  { img: "https://media.giphy.com/media/2zozXhK8u6xvV560SG/giphy.gif" },
  { img: "https://media.giphy.com/media/2zozXhK8u6xvV560SG/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9HDdEWq7rAs1hu/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
  { img: "https://media.giphy.com/media/2zozXhK8u6xvV560SG/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9HDdEWq7rAs1hu/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
  { img: "https://media.giphy.com/media/2zozXhK8u6xvV560SG/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9HDdEWq7rAs1hu/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
  { img: "https://media.giphy.com/media/2zozXhK8u6xvV560SG/giphy.gif" },
  { img: "https://media.giphy.com/media/l1J9MpthOkxEmmTG8/giphy.gif" },
];

const ResultsGrid = () => {
  const width = 180;

  return (
    <Container fluid>
      <Row>
        {listGif.map((item, index) => (
          <Col key={int(index + 1)}>
            <img src={item.img} width={width} alt={`item ${index} ${1}`} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResultsGrid;
