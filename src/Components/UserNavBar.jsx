import { Link } from "react-router-dom";
import "../Styles/UserNavBar.css";

export default function UserNavBar() {
  return (
    <nav className="User-navbar">
      <div className="nav-container">
        {/* Logo section */}
        <div className="logo-container">
          <Link to="/">
            <img
              src="https://mtcbus.tn.gov.in/asset/images/newlogo.png"
              alt="Bus Logo"
              className="logo"
            />
          </Link>
        </div>
        {/* Navigation links container with both links inside */}
        <div className="nav-links">
          <Link to="/UserHomePage" className="nav-link">
            Home
          </Link>
          <Link to="/UserHomePage/user-view" className="nav-link">
            View Bus Details
          </Link>
        </div>
      </div>
    </nav>
  );
}
