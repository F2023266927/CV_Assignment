import React from "react";

export default function Experience() {
  return (
    <section className="section card">
      <h2>Professional Experience</h2>

      <div className="exp-card">
        <h3>Web Developer Intern</h3>
        <p className="company"><strong>ARC CODES, Lahore</strong></p>
        <p className="duration">June 2025 – October 2025</p>
        <p className="details">
          Developed interactive front-end interfaces using <strong>React</strong> and
          implemented back-end functionality with <strong>Django</strong>.
          Delivered responsive, scalable, and user-friendly web applications.
        </p>
      </div>

      <div className="exp-card">
        <h3>Personal Projects</h3>
        <ul className="project-list">
          <li>Resume Builder App using Django + React</li>
          <li>University Management System using SQL + Python</li>
          <li>Portfolio Website using HTML, CSS & JavaScript</li>
        </ul>
      </div>
    </section>
  );
}
