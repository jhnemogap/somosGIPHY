import React from "react";
import PropTypes from "prop-types";

import NavbarComp from "../../components/NavbarComp/NavbarComp";

const propTypes = {
  /** Children are nodes expected to be of type `<ReadableFile />` */
  children: PropTypes.node.isRequired,
};

const HeaderLayout = (props) => {
  return (
    <div>
      <NavbarComp />
      {props.children}
    </div>
  );
};

HeaderLayout.propTypes = propTypes;

export default HeaderLayout;
