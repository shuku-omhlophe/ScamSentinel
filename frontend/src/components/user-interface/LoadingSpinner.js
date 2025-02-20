import React from "react";
import "../../public/styles.css"; // Ensure styles are applied

const LoadingSpinner = ({ size = "medium", color = "primary" }) => {
  return (
    <div className={`spinner spinner-${size} spinner-${color}`}></div>
  );
};

export default LoadingSpinner;
