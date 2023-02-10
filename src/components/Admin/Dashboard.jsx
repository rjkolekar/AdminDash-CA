import React from "react";
import Sidebar from "./Sidebar";
import DashboardHome from "./pages/DashboardHome";
import Employees from "./pages/Employees";
import TaskManagement from "./pages/TaskManagement";
import Settings from "./Settings";
import Clients from "./pages/Clients";
import AddPartner from "./pages/AddPartner";
import ProtectedRoute from "./ProtectedRoute";
import VeiwReport from "./pages/ViewReport";
import Logout from "./Logout";
import Login from "./Login";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Payment from "./Payment";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Navbar />
        <Routes>
        <Route element={<ProtectedRoute />}></Route>
          <Route path="/" element={<DashboardHome />}></Route>
         

          <Route path="/add" element={<AddPartner />}></Route>
          <Route path="/clients" element={<Clients />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/report" element={<VeiwReport />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/departments" element={<TaskManagement />}></Route>
           {/* </Route> <Route path="/navbar" element={<Navbar />}> */}
           
          <Route path="/login" element={<Login />}></Route>
         

          <Route path="/register" element={<Register />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Dashboard;
