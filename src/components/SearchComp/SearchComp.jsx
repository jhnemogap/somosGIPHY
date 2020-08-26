import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormControl, Button, Col } from "react-bootstrap";

import { setSearchString } from "../../redux/actions";

const SearchComp = () => {
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchString({ searchString: searchText }));
  };

  return (
    <Form id="searcherGifs" onSubmit={handleOnSubmit} action="/search">
      <Form.Row className="justify-content-center">
        <Col sm={6} className="mb-3">
          <FormControl
            id="inputSearch"
            name="q"
            type="text"
            size="lg"
            placeholder=""
            value={searchText}
            onChange={handleOnChange}
          />
        </Col>
        <Col sm="auto">
          <Button size="lg" variant="primary" type="submit">
            Buscar
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default SearchComp;
