import React from "react";
import ft_logo from "../Assets/images/ft_logo.png";

import { Face, Insta, Linkdin, Twiter } from "../commonsvg/icon";
const MyFooter = () => {
  return (
    <>
      <div className="bg-black mt_2 ">
        <div className=" z-1 position-relative overflow-hidden">
          <span className="footer_ep_1"></span>
          <span className="footer_ep_2"></span>
          <div className="container pt-md-5 mt-5">
            <div className="d-flex position-relative  flex-column justify-content-center align-items-center pt-5 pt-md-1">
              <img className="ft_logo   mb-4 mb-md-0" src={ft_logo} alt="" />
              <ul className="gap-4 ps-0  d-flex align-items-center justify-content-center mt-3 mb-4">
                <li>
                  <a
                    href="#home"
                    className="fs-16 text-decoration-none fw-normal text-white op_70 lh_28"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="fs-16 text-decoration-none fw-normal text-white op_70 lh_28"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="team"
                    className="fs-16 text-decoration-none fw-normal text-white op_70 lh_28"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="fs-16 text-decoration-none fw-normal text-white op_70 lh_28"
                  >
                    About Us
                  </a>
                </li>
              </ul>
              <div className="gap-3 d-flex align-items-center justify-content-center pb-3 pb-md-5">
                <a
                  className="app_hover"
                  href="https://twitter.com/i/flow/login?lang=en"
                  target="blank"
                >
                  <Twiter />
                </a>
                <a
                  className="app_hover"
                  href="https://www.facebook.com/login/"
                  target="blank"
                >
                  <Face />
                </a>
                <a
                  className="app_hover"
                  href="https://www.instagram.com/accounts/login/"
                  target="blank"
                >
                  <Insta />
                </a>
                <a
                  className="app_hover"
                  href="https://www.linkedin.com/login"
                  target="blank"
                >
                  <Linkdin />
                </a>
              </div>
            </div>
          </div>
          <hr className="w-100  bg-white" />
          <p className="fs-14 fw-normal op_70 text-white text-center py-3 mb-0">
            © 2024 248 Labs. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default MyFooter;
