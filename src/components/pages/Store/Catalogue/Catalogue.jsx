import React, { useState, useEffect } from "react";

// Components
import Heading from "../../../atoms/Heading";
import Paragraph from "../../../atoms/Paragraph";

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
