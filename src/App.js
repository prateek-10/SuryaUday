import React from "react";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Services from "../src/pages/Services";
import ContactUs from "./pages/ContactUs";
import Membership from "./pages/Membership";
// import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services/:id" element={<Services />} />
        <Route path="/Membership/:id" element={<Membership />} />
        <Route path="/ContactUs/:id" element={<ContactUs />} />
        {/* <Route path="/SignIn/:id" element={<SignIn />} /> */}
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
