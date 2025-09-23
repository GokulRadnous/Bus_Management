import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "../Styles/AddBus.css";

export default function AddBus() {
  let [bus, setBus] = useState({
    busName: "",
    busNo: "",
    from: "",
    to: "",
    date: "",
    noOfSeats: "",
    busImage: "", // NEW field
  });

  function add_bus(e) {
    e.preventDefault();
    axios
      .post("http://localhost:1818/bus", bus)
      .then((res) => {
        console.log(res);
        toast.success("Bus Added Successfully ");
        setBus({
          busName: "",
          busNo: "",
          from: "",
          to: "",
          date: "",
          noOfSeats: "",
          busImage: "",
        }); 
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Bus Data ");
      });
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setBus((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="container mt-4 p-4 shadow rounded bg-light">
      <h1 className="mb-4 text-center"> Add Bus</h1>
      <form onSubmit={add_bus}>
        
        {/* Bus Name */}
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

        {/* Bus Number */}
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

        {/* From */}
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

        {/* To */}
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

        {/* Date */}
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

        {/* No of Seats */}
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

        {/* Bus Image URL */}
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

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-100">
          Add Bus
        </button>
      </form>
    </div>
  );
}
