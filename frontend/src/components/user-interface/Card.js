import React from "react";
import "../../public/styles.css"; // Ensure styles are applied

const Card = ({ title, content, footer, variant = "default" }) => {
  return (
    <div className={`card card-${variant}`}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
