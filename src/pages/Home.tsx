import React from "react";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Video></Video>
    </div>
  );
};

export default Home;
