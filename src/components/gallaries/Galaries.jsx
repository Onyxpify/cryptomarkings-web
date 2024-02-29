import React, { Component } from "react";
import Slider from "react-slick";
import homePageData from "../../data/HomePagdData.json";
import "./galaries.scss";
import { Icon } from "@iconify/react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        // background: "green",
        border: "1px solid reds",
        width: "fit-content",
        height: "fit-content",
        content: "<",
        color: "white",
        padding: "0.5rem",
        position: "absolute",
        zIndex: 10,
        top: "45%",
        right: "-3rem",
        borderRadius: "50%",
        boxShadow: "0px 0px 4px white",
      }}
      onClick={onClick}
    >
      <Icon fontSize={"1.5rem"} icon="ooui:next-ltr" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        // background: "red",
        border: "1px solid reds",
        width: "fit-content",
        height: "fit-content",
        content: "<",
        color: "white",
        padding: "0.5rem",
        position: "absolute",
        zIndex: 10,
        top: "45%",
        left: "-3rem",
        borderRadius: "50%",
        borderRadius: "50%",
        boxShadow: "0px 0px 4px white",
      }}
      onClick={onClick}
    >
      <Icon fontSize={"1.5rem"} icon="ooui:next-rtl" />
    </div>
  );
}

const Galaries = () => {
  const { galaries } = homePageData;
  const { title, images } = galaries;
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "10px",
    rows: 2,
    slidesPerRow: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3500,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    lazyLoad: false,
    nextArrow: <SampleNextArrow className="Next" />,
    prevArrow: <SamplePrevArrow className="Prev" />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          // nextArrow: <SampleNextArrow />,
          // prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          initialSlide: 1,
          rows: 1,
          // nextArrow: <SampleNextArrow />,
          // prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          rows: 1,
          // nextArrow: <SampleNextArrow />,
          // prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="100"
      id="Galary"
    >
      <h2 data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
        {title}
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((each, index) => {
            return <img key={index} src={each.src} alt={each.alt} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Galaries;
