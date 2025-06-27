import React from "react";
import "../styles/Projects.css";
import Learning from "../assets/learning.jpg";
import job from "../assets/job.jpg";
import ecom from "../assets/ecom.jpg";

const projects = [
  {
    title: "AB-Ecom",
    description:
      "An e-commerce web app with Firebase Auth for user signup/login and dynamic product listings fetched from FakeStoreAPI. Uses Redux for global state management including cart actions. Features a responsive UI and add-to-cart functionality.",
    github: "https://github.com/abhicplash/ab-ecom",
    demo: "https://ab-ecom-psi.vercel.app/",
    image: ecom,
  },

  {
    title: "Job Board",
    description:
      "A job listing portal with filterable job search, Firebase Authentication, and an admin dashboard to post new jobs. Built using React, React Query, and Firestore.",
    github: "https://github.com/abhicplash/Job-Board",
    demo: "https://job-board-woad-gamma.vercel.app/",
    image: job,
  },
  {
    title: "E-Learning Platform",
    description:
      "A React + Firebase-based platform that allows users to browse, enroll in, and track online courses. Features include protected routes, skeleton loading, and real-time progress updates.",
    github: "https://github.com/abhicplash/E-Learning",
    demo: "https://e-learning-plateform-tan.vercel.app",
    image: Learning,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card ">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.demo} target="_blank">
                  Live Demo
                </a>
                <a href={project.github} target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
