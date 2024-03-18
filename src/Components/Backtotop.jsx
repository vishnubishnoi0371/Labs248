import React from "react";

const Backtotop = () => {
  const [backtotop, setdowntop] = React.useState(false);

  const runTop = () => {
    document.documentElement.scrollTop = 0;
  };

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setdowntop(true);
    } else {
      setdowntop(false);
    }
  });
  return (
    <>
      {backtotop ? (
        <button
          onClick={runTop}
          className="position-fixed back_top bg-white  d-flex align-items-center justify-content-center  me-2 mb-2 pointer"
        >
          <svg
            width="20"
            height="20"
            fill="#fff"
            viewBox="0 0 16 16"
            className="fill-[#00141b] "
          >
            <path
              className="fill-[#00141b] "
              fillRule="evenodd"
              d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
            ></path>
            <path
              className="fill-[#00141b] "
              fillRule="evenodd"
              d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            ></path>
          </svg>
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default Backtotop;
