import React from "react";
import { Form, FormControl, Button, Col } from "react-bootstrap";

const SearchComp = () => {
  return (
    <Form>
      <Form.Row className="justify-content-center">
        <Col xs="auto">
          <FormControl type="text" placeholder="" />
        </Col>
        <Col xs="auto">
          <Button variant="primary">Buscar</Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default SearchComp;
