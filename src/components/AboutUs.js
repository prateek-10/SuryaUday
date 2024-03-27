import React from "react";
import Typography from "@mui/material/Typography";
import AbtUsImg1 from "../assets/images/AbtUsImg1.webp";
import { Stack } from "@mui/material";

function AboutUs() {
  return (
    <Stack>
      <Typography
        style={{
          textAlign: "center",
          marginTop: "120px",
        }}
      >
        <h2
          style={{
            fontWeight: "450",
            fontSize: "70px",
            color: "black",
            textShadow: "-3px 3px 3px rgba(0, 0, 0, 0.5)",
            animation: "glow 3s infinite alternate",
            fontFamily: "Protest Guerrilla",
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          accumsan facilisis aliquet. Suspendisse rutrum hendrerit fringilla.
          <br />
          Nam ut diam sed lorem rutrum tincidunt non vel justo. Nunc urna magna,
          mollis non felis vel, pellentesque commodo diam. In eu mauris nisi.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          accumsan facilisis aliquet. Suspendisse rutrum hendrerit fringilla.
          Nam ut diam sed lorem rutrum tincidunt non vel justo. Nunc urna magna,
          mollis non felis vel, pellentesque commodo diam.
        </p>
        <p fontWeight="100" fontSize="30px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          accumsan facilisis aliquet. Suspendisse rutrum hendrerit fringilla.
          Nam ut diam sed lorem rutrum tincidunt non vel justo. Nunc urna magna,
          mollis non felis vel, pellentesque commodo diam. .
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
  );
}

export default AboutUs;
