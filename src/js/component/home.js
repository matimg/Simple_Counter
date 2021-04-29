import React from "react";
import Card from "./Card.js";
import { PropTypes } from "prop-types";

//create your first component
export function Home(props) {
	return (
		<div className="text-center mt-5 px-5">
			<div className="row p-5 bg-dark text-center">
				<div className="col">
					<div
						className="card bg-secondary"
						style={{ height: "100%" }}>
						<div className="card-body">
							<i className="far fa-clock text-white display-3 p-1"></i>
						</div>
					</div>
				</div>
				<div className="col">
					<Card numero={props.num6} />
				</div>
				<div className="col">
					<Card numero={props.num5} />
				</div>
				<div className="col">
					<Card numero={props.num4} />
				</div>
				<div className="col">
					<Card numero={props.num3} />
				</div>
				<div className="col">
					<Card numero={props.num2} />
				</div>
				<div className="col">
					<Card numero={props.num1} />
				</div>
			</div>
		</div>
	);
}

Home.propTypes = {
	num1: PropTypes.number,
	num2: PropTypes.number,
	num3: PropTypes.number,
	num4: PropTypes.number,
	num5: PropTypes.number,
	num6: PropTypes.number
};
