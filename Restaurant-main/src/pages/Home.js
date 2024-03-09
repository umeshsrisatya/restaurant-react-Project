import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/food.jpeg";
import "../styles/Home.css";

function Home() {
	return (
		<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
			<div className="headerContainer">
				<h1 style={{ fontWeight: "bold", color:"tomato" }}> Tomato Corner </h1>
				<p>INDIAN FOOD AT A CLICK</p>
				<Link to="/menu">
					<button> Order Now </button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
