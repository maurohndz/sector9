import React, { useState, useEffect } from "react";

// Components
import Heading from "../../components/atoms/Heading";
import Paragraph from "../../components/atoms/Paragraph";
import ListItems from "../../components/molecules/ListItems";

const Catalogue = () => {
	const [data, setData] = useState({
		name: "test",
		description: "test",
		products: [],
	});

	return (
		<section id="catalogue">
			<Heading type="primary">{data.name}</Heading>
			<Paragraph>{data.description}</Paragraph>
		</section>
	);
};

export default Catalogue;
