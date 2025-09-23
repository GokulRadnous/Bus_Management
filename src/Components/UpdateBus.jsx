// UpdateBus.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function UpdateBus() {
  const [bus, setBus] = useState({
    busName: "",
    busNo: "",
    from: "",
    to: "",
    date: "",
    noOfSeats: "",
    busImage: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:1818/bus/${id}`)
      .then((res) => {
        setBus(res.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load bus details");
      });
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setBus((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function update_bus(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:1818/bus/${id}`, bus)
      .then(() => {
        toast.success("Bus Updated Successfully");
        navigate("/adminHomePage/viewAllBuses");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update bus");
      });
  }

  return (
    <div className="container mt-4 p-4 shadow rounded bg-light">
      <h1 className="mb-4 text-center">Update Bus</h1>
      <form onSubmit={update_bus}>
        <div className="mb-3">
          <label className="form-label">Bus Name</label>
          <input
            required
            value={bus.busName}
            onChange={handleChange}
            name="busName"
            type="text"
            placeholder="Enter Bus Name"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Bus Number</label>
          <input
            required
            value={bus.busNo}
            onChange={handleChange}
            name="busNo"
            type="text"
            placeholder="Enter Bus Number"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">From</label>
          <input
            required
            value={bus.from}
            onChange={handleChange}
            name="from"
            type="text"
            placeholder="Enter Departure City"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">To</label>
          <input
            required
            value={bus.to}
            onChange={handleChange}
            name="to"
            type="text"
            placeholder="Enter Destination City"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            required
            value={bus.date}
            onChange={handleChange}
            name="date"
            type="date"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Number of Seats</label>
          <input
            required
            value={bus.noOfSeats}
            onChange={handleChange}
            name="noOfSeats"
            type="number"
            placeholder="Enter Number of Seats"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Bus Image (URL)</label>
          <input
            required
            value={bus.busImage}
            onChange={handleChange}
            name="busImage"
            type="text"
            placeholder="Enter Bus Image URL"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Update Bus
        </button>
      </form>
    </div>
  );
}
