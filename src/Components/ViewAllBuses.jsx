import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "../Styles/ViewAllBuses.css";
import { Link, useNavigate } from "react-router-dom";

export default function ViewAllBuses() {
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

  function deleteBus(id) {
    axios
      .delete(`http://localhost:1818/bus/${id}`)
      .then(() => {
        toast.success("Bus deleted successfully");
        setBuses((prev) => prev.filter((b) => b.id !== id));
      })
      .catch((err) => {
        toast.error("Failed to delete bus");
        console.error(err);
      });
  }

  function updateBus(id) {
    navigate(`/adminHomePage/updateBus/${id}`);
  }

  return (
    <div className="buses-container">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="page-title">Bus Details</h1>
      <div className="buses-grid">
        {buses.map((bus) => (
          <div key={bus.id} className="bus-card">
            {/* Bus Image */}
            <img
              src={bus.busImage}
              alt={bus.busName}
              className="bus-image"
            />

            {/* Bus Details with Link to view detailed bus info */}
            <div className="bus-details">
              <Link state={bus} to={`/adminHomePage/view-Bus/${bus.id}`}>
                <h3 className="bus-title">{bus.busName} ({bus.busNo})</h3>
                <p className="bus-info">
                  <strong>Route:</strong> {bus.from} ➝ {bus.to}
                </p>
              </Link>
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

            {/* Action Buttons */}
            <div className="bus-actions">
              <button
                className="btn update-btn"
                onClick={() => updateBus(bus.id)}
                aria-label={`Update ${bus.busName}`}
              >
                Update
              </button>
              <button
                className="btn remove-btn"
                onClick={() => deleteBus(bus.id)}
                aria-label={`Remove ${bus.busName}`}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
