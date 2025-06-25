import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="heroDetails">
        <h2>
          Hey, This is <br /> <span className="name">Abhilash CP</span>
        </h2>

        <p>Frontend React Developer | Building real-world solutions</p>

        <Link to={"/contact"}>
          <button>Lets Talk</button>
        </Link>
      </div>
      <div className="hero-Img-wrapper"></div>
    </div>
  );
};

export default Hero;
