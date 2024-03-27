import React from "react";
import { Box, Typography } from "@mui/material";
import AboutUs from "../components/AboutUs";
import HeroBanner from "../components/HeroBanner";
import AbtUs from "../components/AbtUs";
import Ticker from "../components/Ticker";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <Box style={{ backgroundColor: "white" }}>
      <HeroBanner />
      <Ticker />
      <AboutUs />
      <AbtUs />
      <Carousel />;
    </Box>
  );
};

export default Home;
