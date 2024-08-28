import React from "react";
import "./Brackground.css";
import video1 from "../../assets/video1.mp4";

function Background({ PlayStatus, HeroCount }) {
  if (PlayStatus) {
    return (
      <video
        className="background fixed top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (HeroCount === 0) {
    return (
      <img
        src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="background  fixed top-0 left-0 w-full h-full object-cover"
        alt="image1"
      />
    );
  } else if (HeroCount === 1) {
    return (
      <img
        src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="background fixed top-0 left-0 w-full h-full object-cover"
        alt="image2"
      />
    );
  } else if (HeroCount === 2) {
    return (
      <img
        src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="background fixed top-0 left-0 w-full h-full object-cover"
        alt="image3"
      />
    );
  }
  return null;
}

export default Background;
