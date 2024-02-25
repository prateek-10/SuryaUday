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
          marginTop: "150px",
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
            marginRight: "100px",
            marginTop: "70px",
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
            backgroundColor: "yellow",
            width: "800px",
            marginTop: "350px",
            marginLeft: "200px",
            height: "450px",
            position: "absolute",
          }}
        >
          <h2 style={{ fontWeight: "600", fontSize: "60px" }}>FEATURES</h2>
          <p fontWeight="100" fontSize="15px" style={{ margin: "10px" }}>
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
      </Stack>
    </Stack>
  );
};

export default AbtUs;
