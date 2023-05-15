import "./App.css";
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
import UserDetails from "./screens/UserDetails";
import Booking from "./screens/Booking";
import { ContextReducer } from "./components/contextReducer";
import Myappoitment from "./screens/Myappoitment";


export default function App() {
  return (
    <
      <ContextReducer>
        <Navbar />
        <div className="container-fluid">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/admin" element={<AdminSignup />} />
            <Route exact path="/doctors" element={<Doctors />} />
            <Route exact path="/aboutuser" element={<UserDetails />} />
            <Route exact path="/book" element={<Booking />} />
            <Route exact path="/myappoitment" element={<Myappoitment />} />
          </Routes>
        </div>
        <Footer />
      </ContextReducer>
    </>
  );
}
