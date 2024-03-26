import React from "react";
import Next from "../Assets/images/next_move.webp";
import rich from "../Assets/images/rich-img.webp";
import richep from "../Assets/images/rich-ep-1.webp";
import moveep from "../Assets/images/move-ep-1.webp";
import { Pause } from "../commonsvg/icon";

const NextMove = () => {
  return (
    <div className="bg-black">
      <div className=" pt_75 mt_2 position-relative">
        <span className="position-absolute move-ep-1 d-none d-lg-block">
          <img src={moveep} alt="elpp" />
        </span>
        <span className="position-absolute d-none d-lg-block rich-ep-1">
          <img src={richep} alt="elpp" />
        </span>
        <div className="container p-0">
          <img
            data-aos="zoom-in"
            className="w-100 br_30 mb-3 z-3 position-relative "
            src={Next}
            alt="elpp"
          />
          <div className="row flex-column-reverse flex-md-row justify-content-center align-items-center justify-content-md-between pb_75">
            <div data-aos="zoom-in" className="col-xl-3  col-12">
              <div className="d-flex flex-column flex-md-row flex-xl-column align-items-center gap-4 mb-3 justify-content-center justify-content-xl-start">
                <button className="text-white nxt_btn fw-bold fs-18 lh_27">
                  name@domain.com
                </button>
                <button className="text-white make-btn fw-bold fs-18 lh_27">
                  Make Your Move
                </button>
              </div>
            </div>
            <div data-aos="zoom-in" className="col-xl-8 col-12 ">
              <p className="fs-16 px-3 px-md-0 text-center text-xl-start fw-normal lh_24 text-white-2 mb-3">
                Unveiled is a unique
                <span className="fw-semibold text-white ms-1">
                  collectible card game{" "}
                </span>
                in which you gain fervour for your ventures, spending it on
                mercenaries, spies, automata, and influence.
              </p>
              <p className="fs-16 px-3 px-md-0 text-center text-xl-start fw-normal lh_24 text-white-2 mb-3">
                You play
                <span className="fw-semibold text-white  ms-1">
                  a rogue merchant trader
                </span>
                allied to a noble house, alongside your
                <span className="fw-semibold text-white  ms-1">
                  cryptid-humanoid companions
                </span>
                in a game of ambition and alliance, deception and miracles,
                manipulation and annihilation. Bells chime in the harbour, and
                markets are opening. Guards have swept the streets of the more
                obvious dangers.
              </p>
              <p className="fs-16 text-center text-xl-start fw-semibold lh_24 text-white mb-3">
                What’s your next move?
              </p>
            </div>
          </div>
          <div className="pt_75 position-relative">
            <a href="#" className="pause_btn position-absolute">
              <Pause />
            </a>

            <h1
              data-aos="zoom-in"
              className="fs-52 lh_62 px-3 fw-bold text-white mx-auto text-center mb-4 pb-1"
            >
              A rich, inhabited, and licensable world.
            </h1>
            <img
              data-aos="zoom-in"
              className="w-100 z-2 position-relative"
              src={rich}
              alt="rich-img"
            />
            <p className="fs-16 lh_24 px-3 fw-normal text-white op_70 text-center mb-0 mt-3 pt-2">
              Illustrated with original artwork and a cinematic score, destined
              not only for mobile and desktop gaming but
              <span className="d-block">
                also for film and television, events, merchandising, and
                partnerships.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextMove;
