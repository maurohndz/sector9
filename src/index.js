import React from "react";
import ReactDOM from "react-dom/client";

import Store from "./Store";

import './styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<Store />);
