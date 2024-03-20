import React from "react";

const WhatNext = () => {
  return (
    <>
      <div className="what_bg d-flex flex-column mt_2 min_vh_md_100 ">
        <div className="container d-flex  flex-grow-1 align-items-center">
          <div data-aos="zoom-in" className="mx-auto d-flex flex-column">
            <p className="fs-52 lh_62 fw-bold mx-auto text-white mw_498 mb-3 text-center">
              What’s Next
            </p>
            <p className="fs-16 fw-normal lh_24 text-white text-center mb-2 pb-1">
              92% of gamers have never even tried a Web3 game. We’re going to
              change that.
            </p>
            <p className="fs-16 fw-normal lh_24 text-white op_70 text-center mb-4">
              
              248Labs The market is worth about a gazillion dollars, so whatever
              those stats were, that goes here.
            </p>
            <button className="text-white what-btn fw-bold mx-auto">
              
              Try to keep up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatNext;
