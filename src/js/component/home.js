import React from "react";
import Card from "./Card.js";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5 px-5">
			<div className="row p-5 bg-dark text-center">
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card />
				</div>
			</div>
		</div>
	);
}
