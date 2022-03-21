import React from "react";

const Jumbotron = () => {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc ultrices auctor dui sed malesuada. Sed vitae velit vel
					elit placerat egestas. Phasellus odio massa, molestie non
					sem sit amet, tincidunt ultrices ante. Vivamus vel neque
					scelerisque, bibendum arcu vel, sollicitudin odio. Nulla
					convallis lorem sit amet nunc placerat aliquam.
				</p>
				<hr className="my-4"></hr>
				<p>
					Morbi auctor dapibus consectetur. Praesent a venenatis
					tortor, a ultricies ex. Maecenas suscipit imperdiet metus,
					in aliquam ex faucibus in. Quisque dignissim laoreet
					pulvinar. Proin faucibus metus at iaculis pellentesque.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		</div>
	);
};

export default Jumbotron;
