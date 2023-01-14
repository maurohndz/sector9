import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Item from '../../molecules/Item'

import './LayoutItems.scss'

const LayoutItems = ({ items, type }) => {
	return (
		<ul className={classNames("lItems", { [`lItems-${type}`]: type })}>
			{items.map((item) => <Item type={type} {...item} />)}
		</ul>
	);
};

LayoutItems.propTypes = {
	items: PropTypes.array.isRequired,
	type: PropTypes.oneOf(["list", "grid"]).isRequired,
};

LayoutItems.defaultProps = {
	items: []
};

export default LayoutItems;
