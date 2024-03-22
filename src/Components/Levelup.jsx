import React from "react";
import moveep from "../Assets/images/move-ep-1.webp";

const Levelup = () => {
  return (
    <div className="pb-75 bg-black position-relative">
      <div className="level_bg z-3 d-flex flex-column position-relative  min_vh_100">
        <div className="container  d-flex flex-grow-1 justify-content-end align-items-center">
          <div data-aos="zoom-in" className="level_card level_border ">
            <p className="fs-52 lh_67 fw-bold text-white mw_498 mb-4">
              Level up your gaming experience
            </p>
            <button className="text-white level-btn fw-btn">
              {" "}
              Play Unvilled
            </button>
          </div>
        </div>
      </div>
      <span className="position-absolute move-ep-2 d-none d-lg-block">
        <img src={moveep} alt="elpp" />
      </span>
    </div>
  );
};

export default Levelup;
