import React from "react";
import { loaderimginsta, loaderimgmeta } from "./Index";

const Loader = () => {
  return (
    <div className="fixed w-dvw h-dvh text-white flex items-end justify-center top-1/2 left-1/2 -translate-1/2 bg-black">
      <div className="flex h-[60%] mb-12 flex-col items-center justify-between">
        <div className="w-20 h-auto">
          <img src={loaderimginsta} alt="" />
        </div>
        <div className="w-20 h-auto">
          <img src={loaderimgmeta} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
