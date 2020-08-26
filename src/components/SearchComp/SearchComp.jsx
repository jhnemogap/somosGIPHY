import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormControl, Button, Col } from "react-bootstrap";

import { setSearchString } from "../../redux/actions";
import { routeTopGifs } from "../../routes/paths";

const SearchComp = () => {
  const [searchText, setSearchText] = useState("");

  const { searchString } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleOnSubmit = () => {
    dispatch(setSearchString({ searchString: searchText }));
  };

  useEffect(() => {
    if (searchString === routeTopGifs().slice(1)) {
      setSearchText("");
    }
  }, [searchString]);

  return (
    <Form>
      <Form.Row className="justify-content-center">
        <Col sm={6} className="mb-3">
          <FormControl
            type="text"
            size="lg"
            placeholder=""
            value={searchText}
            onChange={handleOnChange}
          />
        </Col>
        <Col sm="auto">
          <Button size="lg" variant="primary" type="button" onClick={handleOnSubmit}>
            Buscar
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default SearchComp;
