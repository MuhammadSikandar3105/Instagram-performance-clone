import React from "react";
import { proimg } from "..";
import { UtilityIcons24 } from "../../../Header";

const MessageHeader = () => {
  return (
    <div className="w-full h-full border-b border-bottom px-4 flex items-center justify-between">
      <div className="w-full rounded-full gap-4 flex items-center">
        <div className="overflow-hidden w-[48px] h-[48px] rounded-full">
          <img src={proimg} alt="pro" />
        </div>
        <h4 className="font-semibold text-lg">mr.malik2105</h4>
      </div>
      <div className="pl-3 flex">
        <div className="p-2">
          <UtilityIcons24 name="audio" />
        </div>
        <div className="p-2">
          <UtilityIcons24 name="video" />
        </div>
        <div className="p-2">
          <UtilityIcons24 name="conversation" />
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
