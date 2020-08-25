import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

import { routeHome } from "../../routes/paths";

const NotFound = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading className="text-center">
        <h3>Error 4 0 4</h3>
      </Alert.Heading>
      <h1 className="text-center">Not found</h1>
      <hr />
      <div className="d-flex justify-content-end">
        <Link to={routeHome()} className="btn btn-outline-dark">
          Volver al inicio
        </Link>
      </div>
    </Alert>
  );
};

export default NotFound;
