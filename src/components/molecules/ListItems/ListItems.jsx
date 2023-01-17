import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

// Components
import Image from "../../atoms/Image";
import Heading from "../../atoms/Heading";

// Styles
import styles from "./listItems.module.scss";

const ListItems = ({ data, link }) => {
	let base = (link.base != '/') ? `${link.base}` : '';

	
	return (
		<ul className={styles.list}>
			{data.map((item) => (
				<li key={item.id}>
					<Link to={`${base}${item[link.key]}`} className={styles.item}>
						<Heading type="secondary">{item.name}</Heading>

						<div className={styles.image}>
							<Image alt={`product - ${item.name}`} src={item.image} />
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};

ListItems.propTypes = {
	data: PropTypes.array.isRequired,
	link: PropTypes.object,
};

ListItems.defaultProps = {
	data: [],
	link: {
		base: "",
		key: "",
	},
};

export default ListItems;
