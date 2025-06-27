import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiFirebase,
  SiGit,
  SiVercel,
  SiTailwindcss,
} from "react-icons/si";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>

        <div className="skills-grid">
          <div className="skill-group">
            <h3>Languages</h3>
            <div className="icons">
              <SiHtml5 />
              <SiCss3 />
              <SiJavascript />
            </div>
          </div>

          <div className="skill-group">
            <h3>Frameworks / Libraries</h3>
            <div className="icons">
              <SiReact />
              <SiRedux />
            </div>
          </div>

          <div className="skill-group">
            <h3>Tools / Services</h3>
            <div className="icons">
              <SiFirebase />
              <SiGit />
              <SiVercel />
            </div>
          </div>

          <div className="skill-group">
            <h3>Styling</h3>
            <div className="icons">
              <SiTailwindcss />
              <SiCss3 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
