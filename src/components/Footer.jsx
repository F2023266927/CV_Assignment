import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://github.com/F2023266927" target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/javeria-usmana-96891636a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={22} />
        </a>
      </div>

      <div className="footer-contact">
        <p>📧 javeria0048@gmail.com</p>
        <p>📞 +92-3413697195</p>
        <p>📍 Lahore, Pakistan</p>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} <strong>Javeria Usmana</strong> | All Rights Reserved
      </p>
    </footer>
  );
}



