import React from "react";

const Card = () => {
	return (
		<div
			className="card mx-auto"
			style={{ width: "18rem", justifyContent: "center" }}>
			<img
				src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3ab35f58229163.59f41fe7ebd6d.png"
				className="card-img-top"
				alt="..."></img>
			<div className="card-body">
				<h5 className="card-title" style={{ textAlign: "center" }}>
					Card title
				</h5>
				<p className="card-text" style={{ textAlign: "center" }}>
					Donec ut magna elit. Quisque sit amet fringilla mi. Integer
					porta lobortis nisl, at blandit ex convallis sed. Curabitur
					lacinia dolor sed mattis volutpat. Aenean pulvinar neque et
					nunc semper, at dapibus quam luctus. In in consequat metus.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
