import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";

// import history from "./history.js";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
	<React.StrictMode>
		<Router basename="/xo/" history={history}>
				<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
