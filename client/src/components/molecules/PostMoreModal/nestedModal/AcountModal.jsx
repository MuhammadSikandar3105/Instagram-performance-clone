import React from "react";
import { HeaderModal, MoreModalIcons, proimg, UtilityIcons24 } from "../index";

const AcountModal = ({ setMore }) => {
  return (
    <div className="flex flex-col justify-center w-full pt-1 h-fit items-center">
      <HeaderModal name="About this account" icon={false} />
      <div className="w-full h-fit">
        <div className="flex flex-col items-center py-2 justify-center w-full">
          <div
            className={`max-w-full relative mr-2 rounded-full pt-4 pb-2 w-20 h-20 overflow-hidden`}
          >
            <img
              src={proimg}
              className="absolute top-1/2 left-1/2 -translate-1/2"
              alt=""
            />
          </div>
          <p className="font-bold pt-4">mr.malik2189</p>
          <p className="w-full text-center btn-color text-xs px-12 py-2 font-normal">
            To help keep our community authentic, we’re showing information
            about accounts on Instagram.{" "}
            <span className="text-[#00376b] font-semibold cursor-pointer">
              {" "}
              See why this information is important.
            </span>
          </p>
        </div>
        <div className="flex py-3 px-4 gap-4 w-full items-center">
          <UtilityIcons24 name="calender" viewBox="0 0 1024 1024" />
          <div className="date flex flex-col">
            <p>Date joined</p>
            <p className="btn-color text-sm">December 2022</p>
          </div>
        </div>
        <div className="flex py-3 gap-4 text-primary px-4 w-full items-center">
          <UtilityIcons24 name="loca" viewBox="-4 0 32 32" />
          <div className="date flex flex-col ">
            <p>Account based in</p>
            <p className="btn-color text-sm">Netherlands</p>
          </div>
        </div>
        <div className="cursor-pointer flex py-3 gap-4 px-4 w-full items-center">
          <UtilityIcons24 name="user" viewBox="0 0 20 20" />
          <div className="date w-full items-center flex justify-between ">
            <p>Former usernames</p>
            <div className="rotate-[90deg] btn-color">
              <MoreModalIcons name="back" size="16" />
            </div>
          </div>
        </div>
        <div
          onClick={() => setMore(false)}
          className="close cursor-pointer border-t border-top w-full py-1 px-2 h-12 flex items-center justify-center"
        >
          Close
        </div>
      </div>
    </div>
  );
};

export default AcountModal;
