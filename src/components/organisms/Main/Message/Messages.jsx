import React from "react";
import ChatSection from "./ChatSection";
import MsgSidebar from "./MsgSidebar";

const Messages = () => {
  return (
    <div className="w-full flex items-start justify-center">
      <MsgSidebar />
      <div className="w-full ml-[26.5%] bg-white rounded-[10px] flex flex-col">
        {/* <!-- chat --> */}
        <ChatSection />
      </div>
    </div>
  );
};

export default Messages;
