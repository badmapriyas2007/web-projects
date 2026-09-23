import { useState } from "react";
import "./App.css";

function App() {
  const students = [
    { id: "ST101", name: "Priya", department: "Cyber" },
    { id: "ST102", name: "Vel", department: "CSE" },
    { id: "ST103", name: "Kavya", department: "ECE" },
    { id: "ST104", name: "Dharani", department: "IT" },
    { id: "ST105", name: "Divya", department: "CSE" },
    { id: "ST106", name: "Praveen", department: "AIDS" },
    { id: "ST107", name: "Vijay", department: "MECH" },
    { id: "ST108", name: "Harish", department: "CSE" },
  ];

  const [attendance, setAttendance] = useState({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const markAttendance = (id, status) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: status,
    }));
  };


  const resetAttendance = () => {
    setAttendance({});
  };


  const presentCount = Object.values(attendance).filter(
    (status) => status === "Present"
  ).length;

  const absentCount = Object.values(attendance).filter(
    (status) => status === "Absent"
  ).length;

  const notMarkedCount = students.length - presentCount - absentCount;

  const attendancePercentage =
    students.length === 0
      ? 0
      : Math.round((presentCount / students.length) * 100);

 
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase());

    const status = attendance[student.id] || "Not Marked";

    const matchesFilter =
      filter === "All" || status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app">

      {/* Header */}
      <header>
        <div>
          <h1>🎓 Student Attendance Tracker</h1>
        </div>

        <button className="reset-btn" onClick={resetAttendance}>
          🔄 Reset
        </button>
      </header>

      {/* Dashboard Cards */}
      <div className="dashboard">

        <div className="card total">
          <h3>Total Students</h3>
          <h2>{students.length}</h2>
          <span>👥 Students</span>
        </div>

        <div className="card present">
          <h3>Present</h3>
          <h2>{presentCount}</h2>
          <span>✅ Students</span>
        </div>

        <div className="card absent">
          <h3>Absent</h3>
          <h2>{absentCount}</h2>
          <span>❌ Students</span>
        </div>

        <div className="card pending">
          <h3>Not Marked</h3>
          <h2>{notMarkedCount}</h2>
          <span>⏳ Pending</span>
        </div>

      </div>

      {/* Attendance Percentage */}
      <div className="percentage-box">
        <div>
          <h3>Today's Attendance</h3>
          <p>{attendancePercentage}% Present</p>
        </div>

        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${attendancePercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="controls">

        <input
          type="text"
          placeholder="🔍 Search by ID or student name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Students</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Not Marked">Not Marked</option>
        </select>

      </div>

      {/* Student Table */}
      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Department</th>
              <th>Status</th>
              <th>Mark Attendance</th>
            </tr>
          </thead>

          <tbody>

            {filteredStudents.map((student) => {

              const status =
                attendance[student.id] || "Not Marked";

              return (
                <tr key={student.id}>

                  <td>
                    <strong>{student.id}</strong>
                  </td>

                  <td>
                    <div className="student-name">
                      <div className="avatar">
                        {student.name.charAt(0)}
                      </div>

                      {student.name}
                    </div>
                  </td>

                  <td>
                    <span className="department">
                      {student.department}
                    </span>
                  </td>

                  <td>

                    <span
                      className={`status ${status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {status === "Present" && "✅ "}
                      {status === "Absent" && "❌ "}
                      {status === "Not Marked" && "⏳ "}
                      {status}
                    </span>

                  </td>

                  <td>

                    <button
                      className="present-btn"
                      onClick={() =>
                        markAttendance(student.id, "Present")
                      }
                    >
                      Present
                    </button>

                    <button
                      className="absent-btn"
                      onClick={() =>
                        markAttendance(student.id, "Absent")
                      }
                    >
                      Absent
                    </button>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

        {filteredStudents.length === 0 && (
          <div className="no-data">
             No students found
          </div>
        )}

      </div>

    </div>
  );
}

export default App;