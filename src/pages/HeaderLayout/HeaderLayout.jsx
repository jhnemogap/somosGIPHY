import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /** Children are nodes expected to be of type `<ReadableFile />` */
  children: PropTypes.node.isRequired,
};

const HeaderLayout = (props) => {
  return (
    <div>
      <header>LOGO</header>
      {props.children}
    </div>
  );
};

HeaderLayout.propTypes = propTypes;

export default HeaderLayout;
