import React from "react";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";
import "./Heros.css";

function Heros({
  setPlaystatus,
  HeroCount,
  heroData,
  setHerocount,
  PlayStatus,
}) {
  return (
    <div className="hero m-32">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore THE features</p>
        <img src={arrow_btn} alt="Explore" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots m-2 p-7">
          <li
            onClick={() => setHerocount(0)}
            className={HeroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHerocount(1)}
            className={HeroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHerocount(2)}
            className={HeroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
      </div>
      <div className="hero-play align-bottom ml-96">
        <img
          className="ml-96"
          onClick={() => setPlaystatus(!PlayStatus)}
          src={PlayStatus ? pause_icon : play_icon}
          alt="Play/Pause"
        />
        <p>See the Video</p>
      </div>
    </div>
  );
}

export default Heros;
