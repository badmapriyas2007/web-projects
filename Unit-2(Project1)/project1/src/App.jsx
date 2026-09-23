import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Skill from "./components/Skill";
import Goal from "./components/Goal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  const skills = [
    "HTML5 & CSS3",
    "JavaScript",
    "React.js",
    "Python",
    "Machine Learning"
  ];

  const introduction =
    "I am a passionate Computer Science student specializing in CSE (Cyber Security). I love exploring web technologies, data-driven applications and building interactive interfaces. I enjoy solving problems and learning new technologies.";

  return (
    <div className="page">

      <Header
        title="Personal Introduction"
        subtitle="Welcome to my personal profile"
      />

      <main className="content">

        <Profile
          name="BADMA PRIYA S"
          age="19"
          department="CSE (Cyber Security)"
          college="Prince Dr. K. Vasudevan College of Engineering and Technology"
          location="Chennai, India"
        />

        <About
          introduction={introduction}
        />

        <Skill
          skills={skills}
        />

        <Goal
          objective="To become a skilled Full Stack Developer and Cyber Security professional, contributing to innovative software solutions while continuously improving my technical knowledge."
        />

        <Contact
          email="badmapriya@example.com"
          phone="+91 9043628169"
          linkedin="linkedin.com/in/badmapriya-s-49138a389/"
          github="github.com/badmapriyas2007"
        />

      </main>

      <Footer
        message="© 2026 Badma priya S | Built with React"
      />

    </div>
  );
}

export default App;