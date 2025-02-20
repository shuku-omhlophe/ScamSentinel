import React from "react";
import "../../public/styles.css"; // Ensure styles are applied

const ScamResult = ({ result }) => {
  if (!result) {
    return null; // Don't render anything if there's no result
  }

  return (
    <div className={`card ${result.is_scam ? "status-high" : "status-low"}`}>
      <h2>Scan Results</h2>
      <p>
        <strong>Scam Detected:</strong> {result.is_scam ? "Yes 🚨" : "No ✅"}
      </p>
      <p>
        <strong>Confidence Score:</strong> {result.confidence}%
      </p>
      {result.risk_level && (
        <p>
          <strong>Risk Level:</strong> {result.risk_level}
        </p>
      )}
      {result.details && (
        <p>
          <strong>Details:</strong> {result.details}
        </p>
      )}
      {result.sources && result.sources.length > 0 && (
        <div>
          <strong>Reported Sources:</strong>
          <ul>
            {result.sources.map((source, index) => (
              <li key={index}>
                <a href={source} target="_blank" rel="noopener noreferrer">
                  {source}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ScamResult;
