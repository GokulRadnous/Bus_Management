import { Link } from "react-router-dom";
import "../styles/AdminNavBar.css";

export default function AdminNavBar() {
  return (
    <nav className="admin-navbar">
      <div className="nav-container">

        {/* Logo & Brand */}
        <div className="logo-container">
          <Link to="/">
            <img
              src="https://mtcbus.tn.gov.in/asset/images/newlogo.png"
              alt="Bus Logo"
              className="logo"
            />
          </Link>
          <h2 className="brand-name">Bus Management - Admin</h2>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/AdminHomePage" className="nav-link">
            Home
          </Link>
          <Link to="/AdminHomePage/add-bus" className="nav-link">
            Add Bus
          </Link>
          <Link to="/AdminHomePage/viewAllBuses" className="nav-link">
            View All Buses
          </Link>
        </div>
      </div>
    </nav>
  );
}
