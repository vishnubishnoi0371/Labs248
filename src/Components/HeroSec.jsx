import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav";

const HeroSec = () => {
  return (
    <>
      <div className="hero_bg d-flex flex-column min-vh-100">
        <div className="container ">
          <div className="mb-5 pb-md-5">
            <MyNav />
          </div>

          <div
            id="home"
            data-aos="zoom-in"
            className="d-flex align-items-center pt-5 mt-5 justify-content-center flex-column "
          >
            <h1 className="text-white fw-bold lh_86 mt-5 pt-md-4 fs-72 text-center mx-auto mw_873 mb-3">
              Changing the way games are made
            </h1>
            <p className="fs-24 lh_28 fw-normal text-white text-center">
              Redefining the future of play
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSec;
