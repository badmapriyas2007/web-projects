function Skills() {

  const skills = [
    {
      icon: "🌐",
      name: "HTML",
      level: "Advanced"
    },
    {
      icon: "🎨",
      name: "CSS",
      level: "Intermediate"
    },
    {
      icon: "⚡",
      name: "JavaScript",
      level: "Intermediate"
    },
    {
      icon: "☕",
      name: "Java",
      level: "Intermediate"
    },
    {
      icon: "🐍",
      name: "Python",
      level: "Intermediate"
    },
    {
      icon: "⚛️",
      name: "React",
      level: "Learning"
    },
    {
      icon: "🔐",
      name: "Cyber Security",
      level: "Learning"
    },
    {
      icon: "🗄️",
      name: "SQL",
      level: "Learning"
    }
  ];

  return (
    <section className="page-section">

      <p className="section-label">02 — SKILLS</p>

      <h1 className="section-title">
        My <span>toolbox.</span>
      </h1>

      <p className="section-description">
        Technologies and concepts I use while learning,
        experimenting and building projects.
      </p>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <div>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;