import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./Header";
import Projects from "./Project.js";
import Particle from "./particles";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Projects />, document.getElementById("Portfolio"));
ReactDOM.render(<Particle />, document.getElementById("Particles"));
//ReactDOM.render(<Header />, document.getElementById("Header"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
