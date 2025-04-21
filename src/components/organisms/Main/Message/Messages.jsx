import React from "react";
import ChatSection from "./ChatSection";
import MsgSidebar from "./MsgSidebar";

const Messages = () => {
  return (
    <div className="w-full flex items-start justify-center">
      <MsgSidebar />
      {/* <!-- chat --> */}
      <ChatSection />
    </div>
  );
};

export default Messages;
