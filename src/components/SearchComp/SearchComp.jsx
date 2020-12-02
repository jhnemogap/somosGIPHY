import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Form, FormControl, Button, Col } from "react-bootstrap";

import { setSearchString, setSearchResults } from "../../redux/actions";
import { routeHome, routeTopGifs, routeSearch } from "../../routes/paths";

const SearchComp = () => {
  const [searchText, setSearchText] = useState("");
  const [cleanResultsText, setCleanResultsText] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const { searchResults } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchResults({ searchResults: [] }));
    setCleanResultsText(true);
    if (location.pathname !== routeHome() && location.pathname !== routeSearch()) {
      history.push(routeHome());
    }
  };

  useEffect(() => {
    if (searchResults.length === 0 && cleanResultsText === true) {
      dispatch(setSearchString({ searchString: searchText }));
      setCleanResultsText(false);
    }
  }, [searchResults, cleanResultsText]);

  useEffect(() => {
    if (location.pathname === routeTopGifs()) {
      setSearchText("");
    }
  }, [location]);

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
