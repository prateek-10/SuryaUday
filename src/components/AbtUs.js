import { Stack, Typography } from "@mui/material";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import gym from "../assets/images/gym.jpg";

const AbtUs = () => {
  return (
    <Stack>
      <Typography
        style={{
          textAlign: "center",
          marginTop: "115px",
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
          EXPLORE OUR PRACTICES AND LEGACY
        </h2>
        <p fontWeight="100" fontSize="15px" style={{ margin: "0px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          accumsan facilisis aliquet. Suspendisse rutrum hendrerit fringilla.
          <br />
          Nam ut diam sed lorem rutrum tincidunt non vel justo. Nunc urna magna,
          mollis non felis vel, pellentesque commodo diam. In eu mauris nisi.
        </p>
      </Typography>
      <Stack style={{ position: "relative" }}>
        <Stack
          direction="row"
          style={{
            position: "relative",
            overflow: "hidden",
            justifyContent: "flex-end",
            marginRight: "110px",
            marginTop: "90px",
          }}
        >
          <ParallaxProvider>
            <Parallax speed={-50} style={{ position: "relative" }}>
              <img
                src={gym}
                style={{
                  width: "68vw",
                  height: "80vh",
                  backgroundColor: "transparent",
                }}
                alt="gym"
              />
            </Parallax>
          </ParallaxProvider>
        </Stack>
        <Typography
          display="inline"
          color="#67042a"
          fontFamily="Montserrat"
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "30px",
            backgroundColor: "#a4b28c",
            width: "800px",
            marginTop: "350px",
            marginLeft: "110px",
            height: "420px",
            position: "absolute",
          }}
        >
          <h2
            style={{
              fontWeight: "600",
              fontSize: "60px",
              fontFamily: "Protest Guerrilla",
            }}
          >
            FEATURES
          </h2>
          <p
            style={{
              margin: "10px",
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "1rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque accumsan facilisis aliquet. Suspendisse rutrum
            hendrerit fringilla. Nam ut diam sed lorem rutrum tincidunt non vel
            justo. Nunc urna magna, mollis non felis vel, pellentesque commodo
            diam. In eu mauris nisi. Donec nec gravida enim. Etiam at lacus
            consequat augue suscipit porta ut at mi. Mauris malesuada sodales
            fermentum. Morbi vel egestas enim. Phasellus a felis ut sapien
            ultrices malesuada eget sit amet tellus. Fusce in tellus sit amet
            diam porta vestibulum.
          </p>
        </Typography>
        <a
          href="#Register"
          style={{
            textDecoration: "none",
            color: "#BEE1E6",
            marginTop: "-20px",
            marginLeft: "405px",
            zIndex: "120",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button
            className="btn1"
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
            Our Services
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

export default AbtUs;
