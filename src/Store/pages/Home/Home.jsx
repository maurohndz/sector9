import React from "react";

// Components
import Heading from "../../components/atoms/Heading";
import Paragraph from "../../components/atoms/Paragraph";
import ListItems from "../../components/molecules/ListItems";

// Data fake
import fake from "./fake";

const Home = () => {
	return (
		<section id="home">
			<Heading type="primary">Home</Heading>
			<Paragraph>
				Arma la patineta que siempre has soñado, personaliza eligiendo
				cada una de sus partes y pasea por la vida en tu sector 9.
			</Paragraph>

			<ListItems
				data={fake}
				link={{
					base: "/",
					key: "name",
				}}
			/>
		</section>
	);
};

export default Home;
