import UserNavBar from "./UserNavBar";
import { Routes, Route } from "react-router-dom";
import ViewAllBuses from "./ViewAllBuses";
import "../Styles/UserHomePage.css"; 
import AddBus from "./AddBus";
import AdminNavBar from "./AdminNavBar";
import UpdateBus from "./UpdateBus";
import ViewBus from "./ViewBus";

export default function AdminHomePage() {
  return (
    <div className="page-background">
      <AdminNavBar />
      <Routes>
        <Route path="/add-bus" element={<AddBus />} />
        <Route path="/ViewAllBuses" element={<ViewAllBuses />} />
        <Route path="/updateBus/:id" element={<UpdateBus />} />
        <Route path="/view-bus/:id" element={<ViewBus />} />
      </Routes>
    </div>
  );
}
