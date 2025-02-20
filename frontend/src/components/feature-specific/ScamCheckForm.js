import React, { useState } from "react";
import "../../public/styles.css"; // Ensure styles are applied

const ScamCheckForm = () => {
  const [inputData, setInputData] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://localhost:8000/api/scam-check/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: inputData }),
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
      <h2>Check for Potential Scams</h2>
      
      {error && <p className="status-high">{error}</p>}
      {result && (
        <div className={`card ${result.is_scam ? "status-high" : "status-low"}`}>
          <h3>Analysis Result</h3>
          <p><strong>Scam Detected:</strong> {result.is_scam ? "Yes 🚨" : "No ✅"}</p>
          <p><strong>Confidence Score:</strong> {result.confidence}%</p>
          {result.details && <p><strong>Details:</strong> {result.details}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card">
        <div>
          <label>Enter Wallet Address / Transaction Hash / URL:</label>
          <input
            type="text"
            value={inputData}
            onChange={handleChange}
            required
            placeholder="Paste here..."
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Checking..." : "Check Now"}
        </button>
      </form>
    </div>
  );
};

export default ScamCheckForm;
