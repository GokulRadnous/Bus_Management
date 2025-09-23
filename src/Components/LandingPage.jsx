import React from "react";
import { Link } from "react-router-dom";
import "../Styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <h1>Metropolitan Transport Corporation (Chennai) Ltd</h1>
        <p>Your smart way to travel across the city</p>
      </header>

      {/* Login Sections */}
      <div className="login-sections">
        {/* Admin Login */}
        <div className="login-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Admin Login"
          />
          <h2>Admin Portal</h2>
          <Link to="/admin-login">
            <button className="admin-login-button">Admin Login</button>
          </Link>
        </div>

        {/* User Login */}
        <div className="login-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="User Login"
          />
          <h2>Passenger Portal</h2>
          <Link to="/user-login">
            <button className="user-login-button">User Login</button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="landing-footer">
        <p>© 2025 Chennai Bus Corporation | All Rights Reserved</p>
      </footer>
    </div>
  );
}
