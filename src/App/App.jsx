import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

// Pages
import Routes from "../routes";

//
import "../styles/global.scss";

const App = () => {
	return (
		<>
			<Routes />
		</>
	);
};

export default App;
