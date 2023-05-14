// import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Login from "./screens/Login"
import Signup from "./screens/Signup"
import Footer from "./components/Footer";
import AdminSignup from "./screens/AdminSignup";
import Doctors from "./screens/Doctors";


export default function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/admin" element={<AdminSignup />} />
          <Route exact path="/doctors" element={<Doctors />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
