import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "../../public/styles.css"; // Ensure styles are applied

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} ScamSentinel. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
