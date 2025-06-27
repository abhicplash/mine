import React from "react";
import "../styles/About.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import abhilash from "../assets/abhilash.jpeg";

const About = () => {
  return (
    <section id="about" className="about fade-in">
      <div className="about-container">
        <div className="avatar-wrapper">
          <img src={abhilash} alt="Abhilash CP" className="about-avatar" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm <strong>Abhilash CP</strong>,  a self-taught
            frontend developer with 3+ years of experience building responsive,
            scalable, and user-focused web applications. I specialize in React,
            Redux, Firebase, and modern styling with Tailwind CSS and clean CSS
            practices. Proficient in HTML, CSS, and JavaScript, I’ve developed
            real-world projects like e-learning platforms, job boards, and
            e-commerce apps. I’m passionate about writing clean, maintainable
            code and constantly exploring better ways to enhance user
            experience.
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
