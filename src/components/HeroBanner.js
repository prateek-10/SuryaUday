import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import AbtUsImg1 from "../assets/images/AbtUsImg1.webp";
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
        <Typography
          style={{
            textAlign: "center",
            marginTop: "-70px",
          }}
        >
          <h2
            style={{
              fontWeight: "450",
              fontSize: "55px",
              color: "black",
              textShadow: "-3px 3px 3px rgba(0, 0, 0, 0.5)",
              animation: "glow 3s infinite alternate",
              fontFamily: "Inter",
            }}
          >
            EVERY JOURNEY HAS A STARTING
          </h2>
          <Typography
            fontWeight="450"
            fontSize="17px"
            style={{ margin: "0px" }}
            fontFamily="Inter"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque accumsan facilisis aliquet. Suspendisse rutrum
            hendrerit fringilla.
            <br />
            Nam ut diam sed lorem rutrum tincidunt non vel justo. Nunc urna
            magna, mollis non felis vel, pellentesque commodo diam. In eu mauris
            nisi.
          </Typography>
        </Typography>
        <img
          src={AbtUsImg1}
          style={{
            width: "60vw",
            height: "80vh",
            paddingTop: "100px",
            paddingLeft: "200px",
            marginTop: "-10px",
            justifyContent: "center",
          }}
          alt=""
        />
        <Typography
          display="inline"
          color="#67042a"
          fontFamily="Inter"
          style={{
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            padding: "30px",
            backgroundColor: "#17FF8A",
            width: "725px",
            marginTop: "-400px",
            marginLeft: "607px",
            height: "500px",
            // textShadow: "-0px 4px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h2
            style={{
              fontWeight: "450",
              fontSize: "60px",
              textShadow: "-0px 4px 4px rgba(0, 0, 0, 0.5)",
              fontFamily: "Protest Guerrilla",
            }}
          >
            ABOUT US
          </h2>
          <p
            fontWeight="100"
            fontSize="20px"
            style={{ margin: "20px 10px 30px 10px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque accumsan facilisis aliquet. Suspendisse rutrum
            hendrerit fringilla. Nam ut diam sed lorem rutrum tincidunt non vel
            justo. Nunc urna magna, mollis non felis vel, pellentesque commodo
            diam.
          </p>
          <p fontWeight="100" fontSize="30px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque accumsan facilisis aliquet. Suspendisse rutrum
            hendrerit fringilla. Nam ut diam sed lorem rutrum tincidunt non vel
            justo. Nunc urna magna, mollis non felis vel, pellentesque commodo
            diam. .
          </p>
        </Typography>

        <a
          href="#Register"
          style={{
            textDecoration: "none",
            color: "#BEE1E6",
            marginTop: "-109px",
            marginLeft: "790px",
            zIndex: "120",
            display: "flex",
            flexDirection: "column",
            transform: "translateX(8.7%)",
          }}
        >
          <button
            className="btn"
            style={{
              color: "black",
              fontFamily: "Inter",
              fontSize: "22px",
              fontWeight: "normal",
              padding: "22px 0px",
              cursor: "pointer",
              borderStyle: "none",
              zIndex: "120",
              width: "220px",
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
            }}
          >
            Know More
          </button>
          <button
            style={{
              color: "black",
              backgroundColor: "#FF8EC7",
              fontFamily: "Josefin Sans",
              fontSize: "20px",
              padding: "12px 75px",
              cursor: "pointer",
              borderStyle: "none",
              zIndex: "110",
              width: "217px",
              margin: "-62px 0px 0px 9px",
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
            }}
          >
            Know More
          </button>
        </a>
      </Stack>
    </Stack>
  );
};

export default HeroBanner;
