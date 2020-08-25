import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header/Header";

const propTypes = {
  /** Children are nodes expected to be of type `<ReadableFile />` */
  children: PropTypes.node.isRequired,
};

const HeaderLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

HeaderLayout.propTypes = propTypes;

export default HeaderLayout;
