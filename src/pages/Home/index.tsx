import React from "react";

import "./Home.css";
import { Navbar, Video } from "../../components";

const Home = () => {
	return (
		<div className="home-page">
			<Navbar />
			<div className="video-player">
				<Video></Video>
				<div className="center-logo">
					<img src="../src/assets/images/center-logo.png" />
					<a href="#" className="arrow-down">
						<i className="fa-solid fa-chevron-down fa-2xl"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
