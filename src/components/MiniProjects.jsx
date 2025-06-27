import React from "react";
import "../styles/MiniProjects.css";
import bmi from "../assets/miniprojects/bmi.png";
import weather from "../assets/miniprojects/weather.png";
import eicra from "../assets/miniprojects/eicra.png";
import mf from "../assets/miniprojects/mf.png";
import vel from "../assets/miniprojects/vel.png";
import tt from "../assets/miniprojects/tt.png";
import calc from "../assets/miniprojects/calc.png";
import qr from "../assets/miniprojects/qr.png";

const miniProjects = [
  {
    title: "BMI Index ",
    image: bmi,
    link: "https://bmi-calculator-five-snowy.vercel.app",
    description:
      "A responsive BMI Calculator built with React.js, allowing users to input height and weight to instantly calculate their Body Mass Index with result categorization.",
  },
  {
    title: "Weather App",
    image: weather,
    link: "https://weather-app-six-ebon-83.vercel.app",
    description:
      "A simple weather application built with React.js, using the OpenWeatherMap API to fetch and display real-time weather data by city, with a clean and responsive UI.",
  },
  {
    title: "IAS EICRA",
    image: eicra,
    link: "https://iaseicra.com/",
    description:
      "A clean, responsive company website for IAS EICRA, showcasing services, contact options, and institutional information with a user-friendly layout and WhatsApp integration.",
  },
  {
    title: "MechFusion",
    image: mf,
    link: "https://mechfusion.in/",
    description:
      "A modern and responsive website for MechFusion, highlighting engineering solutions, service offerings, and contact features with a clean, professional UI.",
  },
  {
    title: "Velayudha Pharmacy and Clinic",
    image: vel,
    link: "https://velayudhapharmacyandclinic.com/",
    description:
      "A traditional yet modern website for Velayudha Pharmacy, presenting Ayurvedic services, product listings, and clinic information with a user-friendly design and mobile responsiveness.",
  },

  {
    title: "Techni Trust",
    image: tt,
    link: "https://technitrust.ae/",
    description:
      "A professional and informative website for Techni Trust, showcasing its mission, services, and initiatives with a clean layout and responsive design tailored for trust-based organizations.",
  },
  {
    title: "Basic calculator",
    image: calc,
    link: "https://calculatorhtml-neon.vercel.app",
    description:
      "A simple calculator built with React.js, allowing users to perform basic arithmetic operations with a clean and intuitive UI.",
  },
  {
    title: "QR Code Generator",
    image: qr,
    link: "https://calculatorhtml-neon.vercel.app",
    description:
      "A minimal QR Code Generator built with React.js, allowing users to convert text or URLs into downloadable QR codes instantly.",
  },
];

const MiniProjects = () => {
  return (
    <section className="mini-projects">
      <h2>Mini Projects</h2>
      <div className="mini-projects-grid">
        {miniProjects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiniProjects;
