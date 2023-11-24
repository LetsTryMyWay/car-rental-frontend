import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import LoginRegisterPage from "../components/LoginRegisterPage";
import Login from "../components/Login"; 
import Register from "../components/Register"; 
import Layout from "../components/Layout/Layout"; 

const Routers = () => {
  return (
    <Routes>
      {/* Default route: Open LoginRegisterPage */}
      <Route path="/" element={<LoginRegisterPage />} />
      
      {/* Redirect from /home to /home (default route within Layout) */}
      <Route path="/pages/home" element={<Navigate to="/home" />}/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
    </Routes>
  );
};

export default Routers;
