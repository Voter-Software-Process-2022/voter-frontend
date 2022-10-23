import React from "react";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="video-player">
        <Video></Video>
        <div className="center-logo">
          <img src="../src/assets/images/center-logo.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
