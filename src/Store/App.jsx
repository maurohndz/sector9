import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'

// Pages
import Home from './pages/Home'

//Styles
import styles from './styles/App.module.scss'

const App = () => {
	return (
		<div className={styles.app}>
			<Header />

			<div className="main_wrapper">
				{/*<BrowserRouter>
					<Routes>
						<Route path="/store" element={<Home />}/>
					</Routes>
				</BrowserRouter>*/}
			</div>

			<Footer />
		</div>
	);
};

export default App;
