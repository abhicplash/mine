import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import abhilash from "../assets/personal/abhilash.jpeg";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="heroDetails">
        <h2>
          Hey, This is <br /> <span className="name">Abhilash CP</span>
        </h2>

        <p>
          Frontend Developer crafting modern,<br /> scalable, and user-focused web
          apps
        </p>

        <Link to={"/contact"}>
          <button>Lets Talk</button>
        </Link>
      </div>
      <div className="hero-Img-wrapper">
        <img src={abhilash} alt="" />
      </div>
    </div>
  );
};

export default Hero;
