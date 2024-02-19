import React from "react";
import { Box, Typography } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import AbtUs from "../components/AbtUs";
import Sponsors from "../components/Sponsors";
import MembershipCard from "../components/MembershipCard";
import FitnessEvaluater from "../components/FitnessEvaluater";
import membershipplan from "../assets/images/Membershipplan.png";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <Box style={{ backgroundColor: "white" }}>
      <HeroBanner />
      <AbtUs />
      <Carousel />;
      <Sponsors />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          margin: "184px 0px 0px 0px",
        }}
      >
        <img src={membershipplan} style={{ height: "100px" }} />
      </div>
      <MembershipCard />
      {/* <FitnessEvaluater/> */}
    </Box>
  );
};

export default Home;
