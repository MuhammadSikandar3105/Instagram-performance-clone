import React from "react";
import { Button, heroImage } from "./index";

const Hero = () => {
  return (
    <div
      className="absolute flex flex-col justify-between items-center 
                overflow-hidden rounded-[20px] 
                m-[10px] w-[calc(100%-20px)] h-[calc(100vh-20px)] 
                text-primary"
    >
      <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      <div className="absolute inset-0 flex flex-col items-start justify-end text-white text-start bg-opacity-50 px-12 pb-10">
        <h1 className="text-8xl flex gap-4 flex-col md:text-6xl font-bold">
          <span>Beyond Health.</span>
          <span>Beyond Intelligence.</span>
        </h1>
        <p className="mt-5 font-normal text-lg md:text-xl">
          Unlock precision insights anywhere on Earth with the future of health
          risk intelligence.
        </p>
        <div className="flex justify-between items-center mt-8 gap-3">
          <Button to="/expert" name="Get 3 Free API Calls" classes="border" />
          <Button to="/expert" name="Speak to an Expert" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
