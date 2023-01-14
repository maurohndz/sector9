import React from "react";
import PropTypes from "prop-types";

// Components
import Image from "../../atoms/Image";
import Heading from '../../atoms/Heading'

// Styles
import styles from "./listItems.module.scss";

const ListItems = ({ data }) => {
	return (
		<ul className={styles.list}>
			{data.map(({ id, name, image }) => (
				<li key={id}>
					<a href="#" className={styles.item}>
						<Heading type="secondary">{name}</Heading>

						<div className={styles.image}>
							<Image alt={`product - ${name}`} src={image}/>
						</div>
					</a>
				</li>
			))}
		</ul>
	);
};

ListItems.propTypes = {
	data: PropTypes.array.isRequired,
};

ListItems.defaultProps = {
	data: []
}

export default ListItems;
