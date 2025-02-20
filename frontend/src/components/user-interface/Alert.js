import React, { useEffect } from "react";
import "../../public/styles.css"; // Ensure styles are applied

const Alert = ({ message, type, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto-close after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className={`alert alert-${type}`}>
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>&times;</button>
    </div>
  );
};

export default Alert;
