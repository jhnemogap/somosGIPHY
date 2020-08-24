import React from "react"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LogoImg from "../../assets/img/logo-giphy-black.png";
import { routeHome } from "../../routes/paths";

const propsTypes = {
  width: PropTypes.string,
};

const defaultProps = {
  width: "160",
};

const LogoComp = (props) => {
  const { width } = props;

  return (
    <Link to={routeHome()}>
      <picture>
        <img type="image/jpg" src={LogoImg} alt="Logo" width={width} />
      </picture>
    </Link>
  );
};

LogoComp.propTypes = propsTypes;
LogoComp.defaultProps = defaultProps;

export default LogoComp;
