import React, { useState, useEffect } from "react";

// Components
import Heading from "../../components/atoms/Heading";
import Paragraph from "../../components/atoms/Paragraph";
import ListItems from "../../components/molecules/ListItems";

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
