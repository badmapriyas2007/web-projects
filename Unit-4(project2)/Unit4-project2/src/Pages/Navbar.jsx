import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>BP</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <a
        href="/resume.pdf"
        className="resume-btn"
        target="_blank"
      >
        Resume ↗
      </a>

    </nav>
  );
}

export default Navbar;