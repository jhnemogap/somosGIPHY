import React from "react";
import { Form, FormControl, Button, Col } from "react-bootstrap";

const SearchComp = () => {
  return (
    <Form>
      <Form.Row className="justify-content-center">
        <Col xs="auto">
          <FormControl type="text" size="lg" placeholder="" />
        </Col>
        <Col xs="auto">
          <Button size="lg" variant="primary">
            Buscar
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default SearchComp;
