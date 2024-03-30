import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = "";
    }, 4000);

    return () => clearTimeout(delay);
  }, []);
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div
      className=" duration-300 vw-100 vh-100 bg-black position-fixed top-0 start-0 "
      style={{ display: isLoaded ? "none" : "block", zIndex: 9999 }}
    >
      <div className="d-flex flex-column align-items-center  h-100 justify-content-center">
        <h1 className="fs-52 fw-semibold text-white">LABS_248</h1>
        <div class="loader">
          <div class="l"></div>
          <div class="l"></div>
          <div class="l"></div>
          <div class="l"></div>
          <div class="l"></div>
          <div class="l"></div>
          <div class="l"></div>
          <div class="l"></div>
          <div class="l"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
