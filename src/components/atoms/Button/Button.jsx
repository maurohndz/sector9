import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({ children, action, type }) => {
  return (
    <button type="button" className={`button button-${type}`} onClick={action}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  action: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["primary", "danger", "outline"]),
};

Button.defaultProps = {
  type: "primary",
};

const Button_Link = ({ href, children, type }) => {
  return (
    <Link to={href} className={`button button-${type}`}>
      {children}
    </Link>
  );
};

Button_Link.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "danger", "outline"]),
};

Button_Link.defaultProps = {
  type: "primary",
};

Button.Link = Button_Link;

export default Button;
