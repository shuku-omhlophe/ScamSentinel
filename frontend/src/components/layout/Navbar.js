import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import "../../public/styles.css"; // Ensure styles are applied

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ScamSentinel</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/scam-check">Scam Check</Link>
        </li>
        <li>
          <Link to="/smart-contract">Smart Contract Analysis</Link>
        </li>
        <li>
          <Link to="/transactions">Transaction History</Link>
        </li>
      </ul>

      <div className="navbar-auth">
        {isAuthenticated ? (
          <>
            <Link to="/profile">
              <FaUser className="icon" /> Profile
            </Link>
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt className="icon" /> Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
