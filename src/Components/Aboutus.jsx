import React, { useState } from "react";
const mycardinfo = [
  {
    name: "World Building",
    para1:
      "Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision ",
  },
  {
    name: "Game Design",
    para1:
      "Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination. ",
  },
  {
    name: "Art and Sound",
    para1:
      "In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down. ",
  },
];

const Aboutus = () => {
  const [first, setfirst] = useState();
  function index(first) {
    setfirst(!first);
  }
  const mycard = mycardinfo.map((mycard) => (
    <div className={`${index === 1 ? "" : ""} col-lg-4 col-sm-6 mt-3`}>
      <div className="card_sh ">
        <div data-aos="zoom-in" className="about_card">
          <p className="fs-32 lh_38 fw-bold text-white text-center text-sm-start">
            {mycard.name}
          </p>
          <p className="fs-16 fw-normal lh_24 text-white text-center text-sm-start op_70 ">
            {mycard.para1}
          </p>
          <span className="about_ellp"></span>
        </div>
      </div>
    </div>
  ));
  return (
    <div id="about" className="bg-black pb-75 mt_2 position-relative ">
      <p className="fs-187 lh_224 text-white position-absolute  z-3 op_6 animated-text fw-bold">
        About Us
      </p>
      <div className="container pt-5 ">
        <div className="row align-items-center pt-5 mt-md-5 justify-content-between  pb-75">
          <div data-aos="zoom-in" className="col-md-4 col-12">
            <div className="d-flex justify-content-center justify-content-sm-start">
              <button className="team_btn fw-bold mb-3 ">DOERS OVER TALKERS</button>
            </div>
            <h1 className="fs-52 fw-bold text-center text-sm-start mx-auto mx-md-0 text-white lh_62 mw_310">
              Game First.Always.
            </h1>
          </div>
          <div data-aos="zoom-in" className="col-md-6 col-12">
            <p className="fs-18 lh_21 text-white fw-medium text-center text-sm-start mb-2 pb-1">
              This is difficult
            </p>
            <p className="fs-16 fw-semibold lh_24 text-white text-center text-sm-start op_70">
              Web3 Games have a notoriously high barrier-to-entry for casual
              gamers who make up the vast majority of players. “Link your
              wallet” before gameplay is not just off-putting, it’s boring.
              We’re solving that with world-class storytelling, world-building,
              game design, art and sound. And fun.
            </p>
          </div>
        </div>
        <div className="row justify-content-center pt-md-5">{mycard}</div>
      </div>
    </div>
  );
};

export default Aboutus;
