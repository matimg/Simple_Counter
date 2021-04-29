//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let cont = 0;
setInterval(() => {
	let num1 = Math.floor(cont / 1);
	let num2 = Math.floor(cont / 10);
	let num3 = Math.floor(cont / 100);
	let num4 = Math.floor(cont / 1000);
	let num5 = Math.floor(cont / 10000);
	let num6 = Math.floor(cont / 100000);
	ReactDOM.render(
		<Home
			num1={num1}
			num2={num2}
			num3={num3}
			num4={num4}
			num5={num5}
			num6={num6}
		/>,
		document.querySelector("#app")
	);
	cont++;
}, 1000);
