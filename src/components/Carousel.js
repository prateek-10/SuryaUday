import { Container, Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function Carousel() {
  const [settings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{ color: "black", "&:hover": { color: "black" } }}
      />
    ),
    prevArrow: (
      <ArrowBackIosNewIcon
        sx={{ color: "black", "&:hover": { color: "black" } }}
      />
    ),
  });

  const data = [
    {
      name: `Ashutosh Rath`,
      img: "https://res.cloudinary.com/dtrhvhmj8/image/upload/v1709218643/portrait-handsome-bearded-man_famqrf.jpg",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem metus, pellentesque a lobortis sed, aliquam et massa. Pellentesque eleifend urna vel elementum luctus.`,
    },
    {
      name: `Prathamesh Sahoo`,
      img: "https://res.cloudinary.com/dtrhvhmj8/image/upload/v1709218643/woman-looking-camera-smiling-waving-with-stars-american-flag_pjk2v8.jpg",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem metus, pellentesque a lobortis sed, aliquam et massa. Pellentesque eleifend urna vel elementum luctus.`,
    },
    {
      name: `Swayam Kar`,
      img: "https://res.cloudinary.com/dtrhvhmj8/image/upload/v1709218645/portrait-handsome-african-man_cdoc64.jpg",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem metus, pellentesque a lobortis sed, aliquam et massa. Pellentesque eleifend urna vel elementum luctus.`,
    },
    {
      name: `MSS Milind Kumar`,
      img: "https://res.cloudinary.com/dtrhvhmj8/image/upload/v1709217948/portrait-asian-teen-boy-with-glasses_yklota.jpg",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem metus, pellentesque a lobortis sed, aliquam et massa. Pellentesque eleifend urna vel elementum luctus.`,
    },
    {
      name: `Mia Williams`,
      img: "https://res.cloudinary.com/dtrhvhmj8/image/upload/v1709217954/skilful-cute-asian-girl-feel-confident-applying-new-job-after-graduating-cross-hands-chest-like-professional-smiling-easy-dealing-with-job-tasks-standing-white-background-copy-space_rwibt2.jpg",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem metus, pellentesque a lobortis sed, aliquam et massa. Pellentesque eleifend urna vel elementum luctus.`,
    },
  ];

  return (
    <Container>
      <h2
        style={{
          fontWeight: "450",
          fontSize: "70px",
          color: "black",
          textShadow: "-3px 3px 3px rgba(0, 0, 0, 0.5)",
          animation: "glow 3s infinite alternate",
          fontFamily: "Protest Guerrilla",
          marginTop: "120px",
          marginLeft: "34px",
        }}
      >
        WHAT OUR CUSTOMERS SAY ABOUT US
      </h2>
      <Typography
        fontWeight="450"
        fontSize="17px"
        style={{ marginTop: "10px", marginLeft: "5px" }}
        fontFamily="Inter"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        accumsan facilisis aliquet. Suspendisse rutrum hendrerit fringilla.
        <br />
        Nam ut diam sed lorem rutrum tincidunt non vel justo. Nunc urna magna,
        mollis non felis vel, pellentesque commodo diam. In eu mauris nisi.
      </Typography>
      <Box mt={10}>
        <Slider {...settings}>
          {data.map((d) => (
            <Box
              key={d.name}
              sx={{
                height: 400,
                borderRadius: "16px",
                display: "flex",
              }}
              // elevation={3}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0px 15px",
                  borderRadius: "16px", // Add borderRadius property here
                  overflow: "hidden",
                  backgroundColor: "#00DDE3",
                }}
              >
                <Box
                  sx={{
                    height: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "16px",
                    backgroundColor: "#C88474",
                  }}
                >
                  <img
                    src={d.img}
                    alt="ProfilePic"
                    style={{
                      width: 130,
                      height: 120,
                      borderRadius: "50%",
                      border: "3px solid black",
                    }}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  p={4}
                  sx={{ padding: "15px 20px 15px 20px" }}
                >
                  <Typography style={{ fontFamily: "Inter", fontSize: "30px" }}>
                    {d.name}
                  </Typography>
                  <Typography style={{ fontFamily: "Inter" }}>
                    {d.review}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
