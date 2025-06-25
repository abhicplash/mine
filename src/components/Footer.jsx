import React from "react";
import "../styles/Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top-wrapper">
        <p className="contact-number">
          <FaPhoneAlt /> <a href="tel:+919562465095">+91 95624 65095</a>
        </p>
        <p>
          | <FaEnvelope />
          <a href="mailto:abhicplash@gmail.com">abhicplash@gmail.com</a>
        </p>
      </div>

      <p>
        <a href="https://wa.me/919562465095" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        |
        <a
          href="https://github.com/abhicplash"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>{" "}
        |
        <a
          href="https://linkedin.com/in/abhicplash"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
