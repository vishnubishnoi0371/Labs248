import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../Assets/images/slide1.webp";
import slide2 from "../Assets/images/slide2.webp";
import slide3 from "../Assets/images/slide3.webp";
import slide4 from "../Assets/images/slide4.webp";

const Sec_One = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 2000,

    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-1 bg-black mt_2">
        <div className="container py-5 my-sm-5">
          <Slider
            {...settings}
            className="d-flex align-items-center justify-content-end"
          >
            <div data-aos="zoom-in" className=" px-4 ">
              <img className="sec-1-imgs" src={slide1} alt="slide" />
            </div>
            <div data-aos="zoom-in" className=" px-4 ">
              <img className="sec-1-imgs" src={slide2} alt="slide" />
            </div>
            <div data-aos="zoom-in" className=" px-4 ">
              <img className="sec-1-imgs" src={slide3} alt="slide" />
            </div>
            <div data-aos="zoom-in" className=" px-4 ">
              <img className="sec-1-imgs" src={slide4} alt="slide" />
            </div>
            <div data-aos="zoom-in" className=" px-4 ">
              <img className="sec-1-imgs" src={slide2} alt="slide" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Sec_One;
