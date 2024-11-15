import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/action/authAction";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Sample authentication logic (Replace with actual API call)
    if (email === "hoorjaved76@gmail.com" && password === "password123") {
      dispatch(login()); // Dispatch login action to update global login state
      localStorage.setItem("isAuthenticated", "true"); // Optional: store in localStorage
      navigate("/"); // Redirect to home page
    } else {
      alert("Invalid email or password"); // Handle login failure
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="p-4 border rounded bg-white" style={{ width: "300px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-100 btn btn-dark">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
