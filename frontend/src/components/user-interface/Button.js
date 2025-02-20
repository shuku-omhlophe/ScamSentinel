import React from "react";
import "../../public/styles.css"; // Ensure styles are applied

const Button = ({ text, onClick, type = "button", variant = "primary", size = "medium", isLoading = false, disabled = false }) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${isLoading ? "loading" : ""}`}
      onClick={onClick}
      type={type}
      disabled={isLoading || disabled}
    >
      {isLoading ? "Loading..." : text}
    </button>
  );
};

export default Button;
