import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Objectives from "./components/Objectives";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="resume-container">
      {/* Header Section */}
      <Intro />

      {/* Main Content */}
      <main className="main-content">
        <About />
        <Objectives />
        <Experience />
        <Skills />
        <Portfolio />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
