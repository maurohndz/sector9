import React, { useState, useEffect } from "react";

// Components
import Heading from "../../../atoms/Heading";
import Paragraph from "../../../atoms/Paragraph";
import ListItems from "../../../molecules/ListItems";

const Categories = () => {
	const [data, setData] = useState({
		name: "test",
		description: "test",
		subCategories: [],
	});

	return (
		<section id="categories">
			<Heading type="primary">{data.name}</Heading>
			<Paragraph>{data.description}</Paragraph>

			<ListItems data={data.subCategories} />
		</section>
	);
};

export default Categories;
