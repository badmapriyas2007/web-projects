import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [marks, setMarks] = useState("");

  const [profile, setProfile] = useState({
    name: "",
    roll: "",
    marks: "",
    grade: "",
  });

  const displayProfile = () => {
    let mark = Number(marks);
    let grade;

    if (mark >= 90) {
      grade = "A+";
    } else if (mark >= 80) {
      grade = "A";
    } else if (mark >= 70) {
      grade = "B";
    } else if (mark >= 60) {
      grade = "C";
    } else if (mark >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }

    setProfile({
      name: name,
      roll: roll,
      marks: mark,
      grade: grade,
    });
  };

  return (
    <div className="page">
      <div className="container">

        <h2>Student Profile Card</h2>

        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Roll No"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />

        <br />
        <br />

        <button onClick={displayProfile}>
          Display Profile
        </button>

        <div className="card">
          <h3>Profile</h3>

          <p>
            <b>Name:</b> {profile.name}
          </p>

          <p>
            <b>Roll No:</b> {profile.roll}
          </p>

          <p>
            <b>Marks:</b> {profile.marks}
          </p>

          <p>
            <b>Grade:</b> {profile.grade}
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;