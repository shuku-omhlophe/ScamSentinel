import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../public/styles.css"; // Ensure styles are imported

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Save token in local storage
        navigate("/dashboard"); // Redirect to dashboard after login
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Login to ScamSentinel</h2>
      {error && <p className="status-high">{error}</p>}
      
      <form onSubmit={handleSubmit} className="card">
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
