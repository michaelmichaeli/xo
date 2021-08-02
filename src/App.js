import React from "react";
import { Switch, Route } from "react-router-dom";

import "./styles/global.scss";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AiGame from "./pages/AiGame";
import Multiplayer from "./pages/Multiplayer";
import About from "./pages/About";
import Rooms from "./pages/Rooms";

function App() {
	return (
		<div className="App main-container">
			<NavBar />
			<Switch>
				<Route component={HomePage} exact path="/" />
				<Route component={About} exact path="/about" />
				<Route component={AiGame} exact path="/ai" />
				<Route component={Rooms} exact path="/rooms" />
				<Route component={Multiplayer} exact path="/multiplayer/:roomId?" />
			</Switch>
			<Footer />
		</div>
	);
}
export default App;
