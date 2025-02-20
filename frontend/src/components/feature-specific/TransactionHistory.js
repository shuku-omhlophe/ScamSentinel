import React, { useState, useEffect } from "react";
import "../../public/styles.css"; // Ensure styles are applied

const TransactionHistory = ({ walletAddress }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!walletAddress) return;

    const fetchTransactions = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`http://localhost:8000/api/transactions/${walletAddress}/`);
        const data = await response.json();

        if (response.ok) {
          setTransactions(data.transactions);
        } else {
          setError(data.message || "Failed to fetch transactions.");
        }
      } catch (error) {
        setError("Error connecting to server. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [walletAddress]);

  return (
    <div className="container">
      <h2>Transaction History</h2>

      {error && <p className="status-high">{error}</p>}
      {loading && <p>Loading transactions...</p>}

      {transactions.length === 0 && !loading && <p>No transactions found.</p>}

      {transactions.length > 0 && (
        <div className="card">
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Txn Hash</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Risk Level</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <tr key={index} className={txn.risk_level === "High" ? "status-high" : txn.risk_level === "Medium" ? "status-medium" : "status-low"}>
                  <td>
                    <a href={`https://etherscan.io/tx/${txn.hash}`} target="_blank" rel="noopener noreferrer">
                      {txn.hash.slice(0, 10)}...
                    </a>
                  </td>
                  <td>{new Date(txn.timestamp).toLocaleString()}</td>
                  <td>{txn.amount} ETH</td>
                  <td>{txn.status}</td>
                  <td>{txn.risk_level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
