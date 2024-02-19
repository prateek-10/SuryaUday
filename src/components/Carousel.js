import React, { useState } from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { aboutcontent } from "../data/AboutUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/Carousel.css";

function CustomPrevArrow({ onClick }) {
  return (
    <div
      className="arrow custom-prev-arrow"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <span className="material-symbols-outlined">arrow_back_ios_new</span>
    </div>
  );
}

function CustomNextArrow({ onClick }) {
  return (
    <div
      className="arrow custom-next-arrow"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      <span className="material-symbols-outlined">arrow_forward_ios</span>
    </div>
  );
}

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 1200,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        },
      },
    ],
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className="slider" style={{ width: "100vw" }}>
        <Slider
          centerMode={settings.centerMode}
          centerPadding={settings.centerPadding}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          autoplay={settings.autoplay}
          autoplaySpeed={settings.autoplaySpeed}
          beforeChange={settings.beforeChange}
          responsive={settings.responsive}
        >
          {aboutcontent.carouselImages.map((imgUrl, index) => (
            <div
              className={index === slideIndex ? "slide slide-active" : "slide"}
              key={imgUrl}
            >
              <img className="carousel-img" src={imgUrl} alt={`Alt ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          className="arrow custom-prev-arrow"
          onClick={() => setSlideIndex(slideIndex - 1)}
          role="button"
          tabIndex={0}
        >
          <ArrowBackIosNewIcon />
        </div>
        <div
          style={{ alignItems: "flex-end" }}
          className="arrow custom-next-arrow"
          onClick={() => setSlideIndex(slideIndex + 1)}
          role="button"
          tabIndex={0}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
