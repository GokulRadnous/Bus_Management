import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import UserLogin from "./Components/UserLogin";
import UserRegister from "./Components/UserRegister";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserHomePage from "./Components/UserHomePage";
import AdminLogin from "./Components/AdminLogin";
import AdminHomePage from "./Components/AdminHomePage";
import AdminRegister from "./Components/AdminRegister";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="user-login" element={<UserLogin />} />
          <Route path="user-register" element={<UserRegister />} />
          <Route path="UserHomePage/*" element={<UserHomePage />} />
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="AdminHomePage/*" element={<AdminHomePage />} />
          <Route path="admin-register" element={<AdminRegister />} />

        </Routes>
                <ToastContainer position="top-center" />
      </BrowserRouter>
    </div>
  );
}

export default App;
