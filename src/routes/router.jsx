import React from "react";
import { createBrowserRouter } from "react-router-dom";

import LayoutStore from "../components/templates/LayoutStore";

import StoreHome from "../components/pages/Store/Home";
import StoreCatalogue from "../components/pages/Store/Catalogue";
import StoreCategories from "../components/pages/Store/Categories";

const router = createBrowserRouter([
	{
		path: "/store/",
		element: <LayoutStore><StoreHome /></LayoutStore>
	},
	{
		path: "/store/:category",
		element: <StoreCategories />,
	},
]);

export default router;
