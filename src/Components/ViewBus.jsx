import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/UserBus.css";

export default function ViewBus() {
   const location = useLocation();
    const navigate = useNavigate();
    const bus = location.state;
  
    if (!bus) {
      return (
        <div className="bus-detail-container">
          <h2>No bus details available.</h2>
          <button className="btn back-btn" onClick={() => navigate(-1)}>
            ⬅ Back
          </button>
        </div>
      );
    }
  
    return (
      <div className="bus-detail-container">
        <div className="thumbnail">
          <img src={bus.busImage} alt={bus.busName} className="bus-detail-image" />
        </div>
  
        <div className="details">
          <h1 className="detail-title">{bus.busName}</h1>
          <p><strong>Bus Number:</strong> {bus.busNo}</p>
          <p><strong>Route:</strong> {bus.from} ➝ {bus.to}</p>
          <p><strong>Date:</strong> {bus.date}</p>
          <p>
            <strong>Seats:</strong>{" "}
            {bus.noOfSeats > 0 ? (
              <span className="in-stock">{bus.noOfSeats} Available</span>
            ) : (
              <span className="out-stock">No Seats Available</span>
            )}
          </p>
  
          <button className="btn back-btn" onClick={() => navigate(-1)}>
            ⬅ Back
          </button>
        </div>
      </div>
    );
}
