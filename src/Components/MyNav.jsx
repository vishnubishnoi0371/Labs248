import React, { useState } from "react";
import Logo from "../Assets/images/page_logo.webp";
const MyNav = () => {
  const [nav, setNav] = useState(false);
  function setopen() {
    setNav(!nav);
    if (nav === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <>
      <nav className=" container py-3">
        <div className="row align-items-center justify-content-between ">
          <div className="col-auto">
            <img className="nav_img mt-1 pointer" src={Logo} alt="logo" />
          </div>
          <div className="col-auto">
            <div className=" d-flex align-items-center gap-3 gap-lg-4">
              <ul
                className={`${
                  nav ? "left_0" : "left-0"
                } d-flex align-items-center gap-5 gap-sm-3 gap-lg-4 mb-0 ps-0 my_nav`}
              >
                <li className=" cursor-pointer underline-hover">
                  <a
                    href="#about"
                    onClick={setopen}
                    className="text-white position-relative text-decoration-none op_70 fw-normal lh_24"
                  >
                    About us
                  </a>
                </li>
                <li className=" cursor-pointer underline-hover ">
                  <a
                    href="#team"
                    onClick={setopen}
                    className="text-white position-relative text-decoration-none op_70 fw-normal lh_24"
                  >
                    Our Team
                  </a>
                </li>
                <li className=" cursor-pointer  underline-hover">
                  <a
                    href="#roadmap"
                    onClick={setopen}
                    className="text-white position-relative text-decoration-none op_70 fw-normal lh_24"
                  >
                    Roadmap
                  </a>
                </li>

                <button className="text-white nav-btn fw-bold">Contact us </button>
              </ul>

              <div onClick={setopen}>
                {nav ? (
                  <div className=" icon d-flex d-md-none flex-column justify-content-between position-relative ">
                    <span className=" span1 crossLine1"></span>
                    <span className=" span3 crossLine2"></span>
                  </div>
                ) : (
                  <div className="  icon d-flex d-md-none flex-column justify-content-between">
                    <span className=" span1"></span>
                    <span className=" position-relative span2"></span>
                    <span className=" span3"></span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNav;
