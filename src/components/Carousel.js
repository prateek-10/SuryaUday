import { Container, Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

export default function Carousel() {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  const data = [
    {
      name: `John Morgan`,
      img: "https://res.cloudinary.com/dtrhvhmj8/image/upload/v1709218643/portrait-handsome-bearded-man_famqrf.jpg",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Ellie Anderson`,
      img: "https://res.cloudinary.com/dtrhvhmj8/image/upload/v1709218643/woman-looking-camera-smiling-waving-with-stars-american-flag_pjk2v8.jpg",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Nia Adebayo`,
      img: "https://res.cloudinary.com/dtrhvhmj8/image/upload/v1709218645/portrait-handsome-african-man_cdoc64.jpg",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Rigo Louie`,
      img: "https://res.cloudinary.com/dtrhvhmj8/image/upload/v1709217948/portrait-asian-teen-boy-with-glasses_yklota.jpg",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      name: `Mia Williams`,
      img: "https://res.cloudinary.com/dtrhvhmj8/image/upload/v1709217954/skilful-cute-asian-girl-feel-confident-applying-new-job-after-graduating-cross-hands-chest-like-professional-smiling-easy-dealing-with-job-tasks-standing-white-background-copy-space_rwibt2.jpg",
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box mt={20}>
        <Slider {...settings}>
          {data.map((d) => (
            <Box key={d.name} sx={{ height: 450 }} elevation={3}>
              <Box
                sx={{
                  height: 204,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "0 0 16px 16px",
                }}
              >
                <img
                  src={d.img}
                  alt="ProfilePic"
                  style={{ width: 220, height: 200, borderRadius: "50%" }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={4}
                p={4}
              >
                <Typography>{d.name}</Typography>
                <Typography>{d.review}</Typography>
                <Button>Read More</Button>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
