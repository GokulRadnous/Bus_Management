import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "../Styles/ViewAllBuses.css";
import { useNavigate } from "react-router-dom";

export default function UserViewBus() {
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBuses();
  }, []);

  function fetchBuses() {
    axios
      .get("http://localhost:1818/bus")
      .then((res) => {
        setBuses(res.data || []);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch buses");
      });
  }

  function viewDetails(bus) {
    navigate(`/UserHomePage/view-Bus/${bus.id}`, { state: bus });
  }

  return (
    <div className="buses-container">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="page-title">Bus Details</h1>
      <div className="buses-grid">
        {buses.map((bus) => (
          <div key={bus.id} className="bus-card">
            {/* Bus Image */}
            <img src={bus.busImage} alt={bus.busName} className="bus-image" />

            {/* Bus Details */}
            <div className="bus-details">
              <h3 className="bus-title">
                {bus.busName} ({bus.busNo})
              </h3>
              <p className="bus-info">
                <strong>Route:</strong> {bus.from} ➝ {bus.to}
              </p>
              <p className="bus-info">
                <strong>Date:</strong> {bus.date}
              </p>
              <p className="bus-info">
                <strong>Seats:</strong>{" "}
                {bus.noOfSeats > 0 ? (
                  <span className="in-stock">{bus.noOfSeats} Available</span>
                ) : (
                  <span className="out-stock">No Seats Available</span>
                )}
              </p>
            </div>

            {/* Details Button */}
            <div className="bus-actions">
              <button
                className="btn update-btn"
                onClick={() => viewDetails(bus)}
                aria-label={`View Details of ${bus.busName}`}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
