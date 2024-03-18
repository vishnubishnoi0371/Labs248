import React from "react";
import slide1 from "../Assets/images/slide1.png";
import slide2 from "../Assets/images/slide2.png";
import slide3 from "../Assets/images/slide3.png";
import slide4 from "../Assets/images/slide4.png";

const Sec_One = () => {
  return (
    <div className="bg-black mt_2">
      <div className="container">
        <div className="row align-items-end  justify-content-end">
          <div className="col">
            <img className="sec-1-imgs" src={slide1} alt="slide1" />
          </div>
          <div className="col">
            <img className="sec-1-imgs" src={slide2} alt="slide1" />
          </div>
          <div className="col">
            <img className="sec-1-imgs" src={slide3} alt="slide1" />
          </div>
          <div className="col">
            <img className="sec-1-imgs" src={slide4} alt="slide1" />
          </div>
          <div className="col">
            <img className="sec-1-imgs" src={slide2} alt="slide1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec_One;
