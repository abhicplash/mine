import React from "react";
import "../styles/About.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about fade-in">
      <div className="about-container">
        <div className="avatar-wrapper">
          <img
            src="https://avatars.githubusercontent.com/u/137141694?v=4"
            alt="Abhilash CP"
            className="about-avatar"
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm <strong>Abhilash CP</strong>, a self-taught frontend developer
            passionate about building modern, scalable, and user-focused web
            applications. With over 3+ years of experience in React, I’ve built
            real-world projects like e-learning platforms, job boards, and
            e-commerce apps.
          </p>
          <p>
            I specialize in React, Firebase, Redux, and clean CSS — always
            focused on writing maintainable, scalable code. I'm curious,
            growth-oriented, and love crafting interfaces that users love to
            use.
          </p>
          <a
            href="/resume.pdf"
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download Resume
          </a>

          <div className="social-links">
            <a
              href="https://github.com/abhicplash"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/abhicplash"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
