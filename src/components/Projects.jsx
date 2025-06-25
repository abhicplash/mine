const projects = [
  {
    title: "E-Learning Platform",
    description:
      "React + Firebase-based course platform with protected routes and user progress tracking.",
    github: "https://github.com/abhicplash/E-Learning",
    demo: "https://your-elearning-site.com",
  },
  {
    title: "Job Board",
    description:
      "A job portal with filters, Firebase Auth, and admin dashboard.",
    github: "https://github.com/abhicplash/Job-Board",
    demo: "https://your-jobboard-site.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.demo} target="_blank">
              Live Demo
            </a>{" "}
            |{" "}
            <a href={project.github} target="_blank">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
