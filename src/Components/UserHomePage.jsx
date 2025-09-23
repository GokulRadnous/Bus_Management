import UserNavBar from "./UserNavBar";
import { Routes, Route } from "react-router-dom";
import ViewAllBuses from "./ViewAllBuses";
import "../Styles/UserHomePage.css"; 
import UserViewBus from "./UserViewBus";
import UserBus from "./UserBus";

export default function UserHomePage() {
  return (
    <div className="page-background">
      <UserNavBar />
      <Routes>
        <Route path="/user-view" element={<UserViewBus />} />
        <Route path="/view-bus/:id" element={<UserBus />} />
      </Routes>
    </div>
  );
}
