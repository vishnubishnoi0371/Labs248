import React from "react";
import timelogo from "../Assets/images/timeline_logo.webp";
import india from "../Assets/images/india.webp";
import australia from "../Assets/images/australia.webp";
import america from "../Assets/images/america.webp";
import { Starsvg } from "../commonsvg/icon";

const MyRoadmap = () => {
  return (
    <div className="bg-black time_bg ">
      <div id="roadmap" className=" mt_2 position-relative ">
        <p className="fs-187 map_text position-absolute lh_224 text-white op_6 fw-bold">
          ROADMAP{" "}
        </p>
        <div className="container pt-5 ">
          <div
            data-aos="zoom-in"
            className="d-flex align-items-center pt-5 mt-md-5 justify-content-center"
          >
            <button className="team_btn fw-bold">ROAD MAP</button>
          </div>
          <h1
            data-aos="zoom-in"
            className="fs-52 fw-bold text-white mb-5 pb-md-5 text-center mx-auto lh_62"
          >
            Milestones and markers
          </h1>

          <div className=" map_line pt-md-5 mt-5 position-relative">
            <span className="">
              <img
                className="position-absolute top-0 time_logo"
                src={timelogo}
                alt="logo"
              />
            </span>
            <div className="container right">
              <div className="content position-relative overflow-hidden ">
                <h2 className="fs-24 fw-normal CEO_clr lh_28 text-center">
                  Oct 2014
                </h2>
                <p className="fs-24 lh_28 fw-normal text-white text-center">
                  Hired our first employee
                </p>

                <span className="timeline_card_ep"></span>
              </div>
            </div>
            <div className="container  left ">
              <div className="content overflow-hidden">
                <h2 className="fs-24 fw-normal CEO_clr lh_28 text-center">
                  Nov 2014
                </h2>
                <p className="fs-24 lh_28 fw-normal text-white text-center">
                  Launched Bitcoin wallet{" "}
                </p>

                <span className="timeline_card_ep"></span>
              </div>
            </div>
            <div className="container right">
              <div className="content overflow-hidden">
                <h2 className="fs-24 fw-normal CEO_clr lh_28 text-center">
                  Oct 2015
                </h2>
                <p className="fs-24 lh_28 fw-normal text-white text-center">
                  1st prize by Bit angels at Coin Agenda, Las Vegas{" "}
                </p>
                <span className="timeline_card_ep"></span>
              </div>
            </div>
            <div className="container left">
              <div className="content overflow-hidden">
                <h2 className="fs-24 fw-normal CEO_clr lh_28 text-center">
                  Jan 2020
                </h2>
                <div className="d-flex align-items-center gap-3 justify-content-center">
                  <p className="fs-24 lh_28 fw-normal text-white mb-0 text-center">
                    launch On
                  </p>
                  <img className="country_img" src={india} alt="map" />
                  <img className="country_img" src={australia} alt="map" />
                  <img className="country_img" src={america} alt="map" />
                </div>
                <span className="timeline_card_ep"></span>
              </div>
            </div>
            <div className="container right">
              <div className="content overflow-hidden">
                <h2 className="fs-24 fw-normal CEO_clr lh_28 text-center">
                  Jan 2022
                </h2>
                <p className="fs-24 lh_28 fw-normal text-white text-center">
                  Trusted by 10 Millions+ Users{" "}
                  <a href="#">
                    <Starsvg />
                  </a>
                </p>

                <span className="timeline_card_ep"></span>
              </div>
            </div>
          </div>
        </div>
        <span className="time_ep_1 d-none d-md-block"></span>
      </div>
    </div>
  );
};

export default MyRoadmap;
