import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">

      <div className="home-content">

        <p className="small-text">
          HELLO, I'M
        </p>

        <h1>
          Badma Priya <span>S</span>
        </h1>

        <h2>
          CSE <span>•</span> Cyber Security Student
        </h2>

        <p className="hero-description">
          I am a passionate Computer Science student exploring
          web development, programming and cybersecurity.
          I enjoy turning ideas into clean, interactive and
          user-friendly digital experiences.
        </p>

        <div className="home-buttons">

          <Link to="/projects" className="primary-btn">
            Explore My Work →
          </Link>

          <Link to="/contact" className="secondary-btn">
            Let's Connect
          </Link>

        </div>

        <div className="quick-info">

          <div>
            <strong>5+</strong>
            <small>Projects</small>
          </div>

          <div>
            <strong>5+</strong>
            <small>Skills</small>
          </div>

          <div>
            <strong>100%</strong>
            <small>Dedication</small>
          </div>

        </div>

      </div>

      <div className="profile-area">

        <div className="profile-circle">

          <div className="profile-placeholder">
            BP
          </div>

        </div>

        <div className="floating-card">
          <span>💻</span>
          <div>
            <b>Currently Learning</b>
            <small>Cyber Security + React</small>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Home;