import React from "react";

import "./Home.css";
import { Footer, Navbar, Video, VoteSection } from "../components";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="video-player">
        <Video></Video>
        <div className="center-logo">
          <img src="../src/assets/images/center-logo.png" />
          <a href="#vote" className="arrow-down">
            <i className="fa-solid fa-chevron-down fa-2xl"></i>
          </a>
        </div>
      </div>
      <VoteSection></VoteSection>
      <Footer />
    </div>
  );
};

export default Home;
