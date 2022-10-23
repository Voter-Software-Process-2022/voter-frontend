import React from "react";
import { Navbar, Video } from "../../components";

const Home: React.FC = () => {
	return (
		<div className="w-full">
			<Navbar />
			<Video>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80">
					<img src="../src/assets/images/center-logo.png" />
				</div>
				<a href="#" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-2xl">
					<i className="fa-solid fa-chevron-down fa-2xl"></i>
				</a>
			</Video>
		</div>
	);
};

export default Home;
