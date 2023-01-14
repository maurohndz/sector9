import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Styles
import styles from "./heading.module.scss";

const Heading = ({ children, type }) => {
	return (
		<h2 className={classNames(styles.heading, styles[`heading-${type}`])}>
			{children}
		</h2>
	);
};

Heading.propTypes = {
	children: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
};

Heading.defaultProps = {
	type: "primary",
};

export default Heading;
