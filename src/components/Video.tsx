import React from "react";
import bangkokVideo from "../assets/videos/bangkok-video.mp4";
import "./Video.css";
const Video = () => {
  return <video src={bangkokVideo} autoPlay loop muted></video>;
};

export default Video;
