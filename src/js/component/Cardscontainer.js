import React from "react";
import Card from "./Card";

const Cardscontainer = () => {
	return (
		<div className="container">
			<div className="row" style={{ alignItems: "center" }}>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Cardscontainer;
