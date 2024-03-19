import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSec from "./Components/HeroSec";
import Levelup from "./Components/Levelup";
import WhatNext from "./Components/WhatNext";
import NextMove from "./Components/NextMove";
import Behind from "./Components/Behind";
import Aboutus from "./Components/Aboutus";
import Form from "./Components/Form";
import Sec_One from "./Components/Sec_One";
import { useEffect } from "react";
import MyRoadmap from "./Components/MyRoadmap";
import Backtotop from "./Components/Backtotop";
import MyFooter from "./Components/MyFooter";
import Loader from "./Components/Loader";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 2500 });
  }, []);

  return (
    <>
    <div className=" overflow-hidden">
      <Loader/>
      <HeroSec />
      <Sec_One />
      <Aboutus />
      <Levelup />
      <NextMove />
      <Behind />
      <WhatNext />
      <MyRoadmap />
      <Form />
      <MyFooter/>
      <Backtotop />
      </div>
    </>
  );
}

export default App;



