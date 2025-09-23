import "../Styles/UserLogin.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";  
import axios from "axios";
import { toast } from "react-toastify";
import UserHomePage from "./UserHomePage";

export default function UserLogin() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let [admins, setAdmins] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1818/Users")
      .then((res) => {
        console.log(res.data);
        setAdmins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    let temp = admins.filter((admin) => {
      return admin.email === username && admin.password === password;
    });
    console.log(temp);

     let navigate = useNavigate();

  function validate_User(e) {
    e.preventDefault();
    if (temp.length > 0) {
      toast.success("Login successful");
      navigate("/UserHomePage");
    } else {
      toast.error("Login failed");
    }
    // reset form
    setUsername("");
    setPassword("");
  }

  return (
    <div className="user-login">
      <div className="login-card">
        <h1>User Login</h1>
        <p>Please enter your credentials to access the user panel.</p>

        <form className="form-grid" onSubmit={validate_User}>
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="form-actions">
            <button>Login</button>
          </div>
        </form>

        <p className="register-link">
          New User? <Link to="/user-register">Register here</Link>
        </p>
      </div>
    </div>
  );
}