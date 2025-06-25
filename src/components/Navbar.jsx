import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="Navbar-wrapper">
      <Link to={"/"}>
        <h2>Abhilash</h2>
      </Link>
      {view ? (
        <div className="list-mob">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Project</Link>
          <Link>Contact</Link>
          <div className="Nav-socio-Icon-wrapper">
            <FaLinkedin />
            <FaLinkedin />
            <FaLinkedin />
            <FaLinkedin />
          </div>
        </div>
      ) : null}
      <div className="list-desk">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Project</Link>
        <Link>Contact</Link>
      </div>
      <div className="Nav-icon">
        <FaBars
          onClick={() => {
            setView(!view);
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
