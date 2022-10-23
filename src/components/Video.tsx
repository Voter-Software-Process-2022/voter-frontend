import React from "react";
import bangkokVideo from "../assets/videos/bangkok-video1.mp4";
import "./Video.css";
const Video = () => {
  return (
    <div className="overlay">
      <video src={bangkokVideo} autoPlay loop muted></video>
    </div>
  );
};

export default Video;
