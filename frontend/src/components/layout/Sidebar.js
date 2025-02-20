import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaShieldAlt, FaFileContract, FaHistory, FaUser } from "react-icons/fa";
import "../../public/styles.css"; // Ensure styles are applied

const Sidebar = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li>
            <Link to="/">
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/scam-check">
              <FaShieldAlt className="icon" /> Scam Check
            </Link>
          </li>
          <li>
            <Link to="/smart-contract">
              <FaFileContract className="icon" /> Smart Contract Analysis
            </Link>
          </li>
          <li>
            <Link to="/transactions">
              <FaHistory className="icon" /> Transaction History
            </Link>
          </li>

          {isAuthenticated && (
            <li>
              <Link to="/profile">
                <FaUser className="icon" /> Profile
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
