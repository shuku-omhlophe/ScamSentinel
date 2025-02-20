import React, { useState } from "react";
import "../../public/styles.css"; // Ensure styles are applied

const SmartContractAnalyzer = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setContractAddress(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://localhost:8000/api/contract-analyze/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contract_address: contractAddress }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.message || "Something went wrong. Try again.");
      }
    } catch (error) {
      setError("Failed to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Smart Contract Analyzer</h2>

      {error && <p className="status-high">{error}</p>}
      {result && (
        <div className={`card ${result.is_scam ? "status-high" : "status-low"}`}>
          <h3>Analysis Result</h3>
          <p><strong>Scam Detected:</strong> {result.is_scam ? "Yes 🚨" : "No ✅"}</p>
          <p><strong>Risk Score:</strong> {result.risk_score}/100</p>
          {result.issues && result.issues.length > 0 && (
            <div>
              <strong>Detected Issues:</strong>
              <ul>
                {result.issues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          )}
          {result.audit_report && (
            <p>
              <strong>Audit Report:</strong>{" "}
              <a href={result.audit_report} target="_blank" rel="noopener noreferrer">
                View Report
              </a>
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card">
        <div>
          <label>Enter Smart Contract Address:</label>
          <input
            type="text"
            value={contractAddress}
            onChange={handleChange}
            required
            placeholder="0x..."
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Analyze Contract"}
        </button>
      </form>
    </div>
  );
};

export default SmartContractAnalyzer;
