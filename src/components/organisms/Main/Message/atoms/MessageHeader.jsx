import React from "react";
import { proimg } from "..";

const MessageHeader = () => {
  return (
    <div className="h-[121px] p-6 flex items-center justify-between">
      <div className="w-full rounded-full gap-4 flex items-center">
        <div className="overflow-hidden w-[48px] h-[48px] rounded-full">
          <img src={proimg} alt="pro" />
        </div>
        <h4 className="font-semibold text-lg">mr.malik2105</h4>
      </div>
      <div className="flex">
        <div className="call">
          <img src="" alt="call" />
        </div>
        <div className="call">
          <img src="" alt="call" />
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
