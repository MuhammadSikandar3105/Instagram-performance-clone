import React from "react";
import { proimg, RoutesIcons } from "../index";

const ProDetailModal = React.memo(({ position }) => {
  return (
    <div
      className={`rounded-lg w-[366px] dark flex flex-col gap-3 py-4 h-auto absolute text-sm font-semibold`}
      style={{ top: position.top, left: position.left }}
    >
      <div className="w-full px-4 flex items-center justify-start gap-2">
        <div
          className={`max-w-full relative mr-2 rounded-full p-1 w-14 h-14 overflow-hidden`}
        >
          <img
            src={proimg}
            className="absolute top-1/2 left-1/2 -translate-1/2"
            alt=""
          />
        </div>
        <div className="w-fit text-sm text-secondary cursor-pointer font-semibold">
          <h4>Mr.Malik2189</h4>
          <p className="font-normal text-xs">Muhammad sikandar</p>
        </div>
      </div>
      <div className="w-full px-2 flex items-center justify-start gap-2">
        <div className="w-full flex flex-col items-center justify-center">
          <h4>24</h4>
          <p className="font-normal text-xs">Posts</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h4>240</h4>
          <p className="font-normal text-xs">Followers</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h4>4</h4>
          <p className="font-normal text-xs">Following</p>
        </div>
      </div>
      <div className="w-full px-1 flex items-center justify-start gap-1">
        <div className="w-full flex flex-col items-center justify-center">
          <img src={proimg} alt="" />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <img src={proimg} alt="" />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <img src={proimg} alt="" />
        </div>
      </div>
      <div className="w-full px-4 flex items-center justify-start gap-1">
        <button className="max-w-[200px] cursor-pointer text-white py-2 bg-[#0095F6] rounded-lg w-full mr-1 flex gap-2 items-center justify-center">
          <RoutesIcons name="messages" size="18" />{" "}
          <span className="">Message</span>
        </button>
        <button className="max-w-[200px] cursor-pointer py-2 bg-gray-300 rounded-lg w-full flex flex-col items-center justify-center">
          Following
        </button>
      </div>
    </div>
  );
});

export default ProDetailModal;
