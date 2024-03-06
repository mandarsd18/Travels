import React from "react";
import video from "../video/bgvd.mp4";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const goToTours = () => {
    navigate("/tours");
  };
  return (
    <>
      <div className="w-full h-[91vh] relative">
        <div className="absolute top-[20%] left-[10%] w-[80%] mx-auto text-white z-20">
          <h3 className=" font-semibold sm:text-xl md:text-3xl">
            Welcome To Travels
          </h3>
          <h1 className="text-6xl font-bold mb-4 sm:text-7xl md:text-8xl lg:text-9xl">
            Explore <br /> The World
          </h1>
          <p className="text-sm font-semibold mb-3 w-full sm:w-[60%] md:w-[50%]  sm:text-base md:text-lg  ">
            Embrace the unknown, explore the extraordinary, and let your travels
            weave the stories of a lifetime
          </p>
          <button
            className="px-4 py-2 bg-blue-600 rounded-md font-semibold hover:bg-blue-700"
            onClick={goToTours}
          >
            Start your tour{" "}
            <AiOutlineArrowRight className="inline-block font-bold" />
          </button>
        </div>
        <div className="absolute bg-black w-full h-full opacity-20"></div>
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="h-[90.5vh] w-full object-cover "
        ></video>
      </div>
    </>
  );
};

export default Banner;
