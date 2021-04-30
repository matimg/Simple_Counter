import React from "react";
import { PropTypes } from "prop-types";

const Card = props => {
	return (
		<div className="card bg-secondary">
			<div className="card-body">
				<p className="card-title text-white display-3">
					{props.numero % 10}
				</p>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	numero: PropTypes.number
};
