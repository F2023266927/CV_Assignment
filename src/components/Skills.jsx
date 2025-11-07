import React from "react";

export default function Skills() {
  return (
    <section className="section card">
      <h2>Technical Expertise</h2>

      <div className="skill-bar">
        <span>HTML, CSS, JavaScript</span>
        <div className="bar"><div className="fill" style={{ width: "85%" }}></div></div>
      </div>

      <div className="skill-bar">
        <span>React.js</span>
        <div className="bar"><div className="fill" style={{ width: "75%" }}></div></div>
      </div>

      <div className="skill-bar">
        <span>Django & Python</span>
        <div className="bar"><div className="fill" style={{ width: "70%" }}></div></div>
      </div>

      <div className="skill-bar">
        <span>Database (SQL, MySQL)</span>
        <div className="bar"><div className="fill" style={{ width: "80%" }}></div></div>
      </div>

      <div className="skill-bar">
        <span>Git & GitHub</span>
        <div className="bar"><div className="fill" style={{ width: "80%" }}></div></div>
      </div>
    </section>
  );
}
