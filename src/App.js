import React from "react";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Membership from "./pages/Membership";
// import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
