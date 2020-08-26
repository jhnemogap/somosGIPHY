import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LogoImg from "../../assets/img/logo-giphy-black.png";
import { routeHome } from "../../routes/paths";

const propsTypes = {
  width: PropTypes.string,
  stylesProps: PropTypes.object,
};

const defaultProps = {
  width: "240",
  stylesProps: {},
};

const LogoComp = (props) => {
  const { width, stylesProps } = props;

  return (
    <picture style={{ ...stylesProps }}>
      <Link to={routeHome()}>
        <img type="image/jpg" src={LogoImg} alt="Logo" width={width} />
      </Link>
    </picture>
  );
};

LogoComp.propTypes = propsTypes;
LogoComp.defaultProps = defaultProps;

export default LogoComp;
