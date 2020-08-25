import React from "react";
import { Alert } from "react-bootstrap";

const NotFound = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading className="text-center">
        <h3>Error 4 0 4</h3>
      </Alert.Heading>
      <h1 className="text-center">Not found</h1>
    </Alert>
  );
};

export default NotFound;
