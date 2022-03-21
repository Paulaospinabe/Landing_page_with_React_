import React from "react";
import Cardscontainer from "./Cardscontainer";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Body = () => {
	return (
		<>
			<Navbar />
			<br />
			<Jumbotron />
			<br />
			<Cardscontainer />
			<br />
			<Footer />
		</>
	);
};

export default Body;
