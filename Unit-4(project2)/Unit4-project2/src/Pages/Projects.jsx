function Projects() {

  const projects = [
    {
      number: "01",
      title: "Personal Portfolio",
      description:
        "Responsive portfolio website designed to showcase my skills, projects and learning journey.",
      tech: "HTML • CSS • JavaScript"
    },

    {
      number: "02",
      title: "Banking System",
      description:
        "Java-based banking application implementing account management and basic banking operations.",
      tech: "Java • OOP"
    },

    {
      number: "03",
      title: "Library Management System",
      description:
        "System for managing books, users and library operations using programming concepts.",
      tech: "Java"
    },

    {
      number: "04",
      title: "Habit Tracker",
      description:
        "Simple application for tracking daily habits and maintaining consistency.",
      tech: "HTML • CSS • JavaScript"
    },

    {
      number: "05",
      title: "Student Management System",
      description:
        "Application for managing student details and performing basic student operations.",
      tech: "Java"
    },

    {
      number: "06",
      title: "Dice Game",
      description:
        "Interactive browser-based dice game created to practice JavaScript logic and DOM manipulation.",
      tech: "HTML • CSS • JavaScript"
    }
  ];

  return (
    <section className="page-section">

      <p className="section-label">03 — PROJECTS</p>

      <h1 className="section-title">
        Things I've <span>built.</span>
      </h1>

      <p className="section-description">
        A collection of projects created while learning
        programming, web development and application design.
      </p>

      <div className="projects-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.number}>

            <div className="project-top">
              <span>{project.number}</span>
              <span>↗</span>
            </div>

            <h2>{project.title}</h2>

            <p>
              {project.description}
            </p>

            <div className="tech">
              {project.tech}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;