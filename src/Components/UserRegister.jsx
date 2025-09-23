import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../Styles/UserRegister.css";

export default function UserRegister() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  let navigate = useNavigate();

  // Handle input change
  function handleChange(e) {
    let { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  // Handle registration
  function handleSubmit(e) {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    axios
      .post("http://localhost:1818/Users", user)
      .then((res) => {
        toast.success("Account created successfully! Please login.");
        navigate("/user-login");
      })
      .catch((err) => {
        console.error("Error registering user:", err);
        toast.error("Registration failed. Please try again.");
      });
  }

  return (
    <div className="user-register">
      <div className="register-card">
        <h1>Create Passenger Account</h1>

        <form className="form-grid" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            required
          />

          <div className="form-actions">
            <button type="submit">Create Account</button>
          </div>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/user-login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
