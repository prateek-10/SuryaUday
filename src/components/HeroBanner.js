import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import heroimg3 from "../assets/images/heroimg3.jpg";

const HeroBanner = () => {
  return (
    <Stack>
      <Stack
        direction="column"
        sx={{
          backgroundColor: "white",
          // gap: { sm: "280px", xs: "40px" },
          mt: { sm: "0px", xs: "6px" },
          padding: "0px",
        }}
      >
        <div style={{ position: "relative", zIndex: "1" }}>
          <img
            src={heroimg3}
            style={{
              width: "117vw",
              height: "120vh",
              position: "relative",
              top: "-170px",
              left: "-250px",
            }}
            alt="banner"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "80.5%",
              background:
                "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35))",
            }}
          ></div>
        </div>
        <Typography
          sx={{
            fontSize: "130px",
            fontFamily: "Protest Guerrilla",
            marginTop: "100px",
            zIndex: 121,
            textAlign: "center",
            position: "absolute",
            color: "white",
            left: "50%",
            transform: "translateX(-50%)",
            textShadow: "-8px -4px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          HARD WORK
        </Typography>
        <Typography
          sx={{
            fontSize: "130px",
            fontFamily: "Protest Guerrilla",
            marginTop: "230px",
            zIndex: 121,
            textAlign: "center",
            position: "absolute",
            color: "white",
            left: "50%",
            transform: "translateX(-50%)",
            textShadow: "-8px -4px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          PAYS OFF*
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "Inter",
            marginTop: "410px",
            zIndex: 121,
            textAlign: "center",
            position: "absolute",
            color: "white",
            left: "50%",
            transform: "translateX(-50%)",
            textShadow: "-8px -4px 4px rgba(0, 0, 0, 0.5)",
            fontWeight: "bold",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <button
          style={{
            backgroundColor: "#17FF8A",
            color: "black",
            fontSize: "25px",
            fontFamily: "Inter",
            fontWeight: "bold",
            padding: "20px 45px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            border: "none",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 121,
            marginTop: "500px",
          }}
        >
          Get Started
        </button>
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            fontSize: "25px",
            fontFamily: "Inter",
            fontWeight: "bold",
            padding: "20px 45px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            border: "none",
            position: "absolute",
            left: "50.7%",
            transform: "translateX(-50%)",
            zIndex: 120,
            marginTop: "506px",
          }}
        >
          WOWOWO
        </button>
      </Stack>
    </Stack>
  );
};

export default HeroBanner;
