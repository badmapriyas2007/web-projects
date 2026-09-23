function About() {
  return (
    <section className="page-section">

      <p className="section-label">01 — ABOUT ME</p>

      <h1 className="section-title">
        Turning curiosity into <span>code.</span>
      </h1>

      <div className="about-grid">

        <div className="about-main">

          <p>
            I am Badma Priya S, currently pursuing my
            B.E. in Computer Science and Engineering with
            specialization in Cyber Security.
          </p>

          <p>
            I am interested in software development,
            cybersecurity and modern web technologies.
            I enjoy learning new technologies and building
            practical projects that solve real-world problems.
          </p>

          <p>
            My current focus is improving my skills in
            Java, Python, JavaScript, React and Cyber Security.
            I believe consistent learning and hands-on
            practice are the keys to becoming a strong developer.
          </p>

        </div>

        <div className="about-card">

          <h3>Quick Facts</h3>

          <div className="fact">
            <span>Degree</span>
            <b>B.E.</b>
          </div>

          <div className="fact">
            <span>Department</span>
            <b>CSE – Cyber Security</b>
          </div>

          <div className="fact">
            <span>Year</span>
            <b>2nd Year</b>
          </div>

          <div className="fact">
            <span>CGPA</span>
            <b>8.5</b>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;