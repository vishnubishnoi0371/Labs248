import React, { useState } from "react";
import logo from "../Assets/images/page_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSec = () => {
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  const Movement = () => {
    setshow(false);
  };
  return (
    <>
      <div className="hero_bg d-flex flex-column min-vh-100">
        <div className="container ">
          <nav className="d-flex align-items-center justify-content-between pt-3 ">
            <img className="nav_img mt-1 pointer" src={logo} alt="logo" />
            <label for="menuIcon">
              <span className="bg-white"></span>
              <span className="bg-white"></span>
              <span className="bg-white"></span>
            </label>
            <input type="checkbox" id="menuIcon" hidden />
            <ul
              className={`${
                show ? "left-0" : "left-100"
              }  min-h-100 nav-flip d-flex align-items-center justify-content-center list-unstyled gap-4 mb-0 ps-0"
              id="nav"`}
            >
              <li className=" cursor-pointer">
                {" "}
                <a
                  href="#about"
                  className="text-white position-relative text-decoration-none op_70 fw-normal lh_24"
                >
                  About us{" "}
                </a>
              </li>
              <li className=" cursor-pointer ">
                {" "}
                <a
                  href="#team"
                  className="text-white position-relative text-decoration-none op_70 fw-normal lh_24"
                >
                  Our Team
                </a>
              </li>
              <li className=" cursor-pointer ">
                {" "}
                <a
                  href="#roadmap"
                  className="text-white position-relative text-decoration-none op_70 fw-normal lh_24"
                >
                  Roadmap
                </a>
              </li>

              <button className="text-white nav-btn">Contact us </button>
            </ul>
          </nav>
          <div
            id="home"
            data-aos="zoom-in"
            className="d-flex align-items-center pt-md-5 mt-5 justify-content-center flex-column "
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
