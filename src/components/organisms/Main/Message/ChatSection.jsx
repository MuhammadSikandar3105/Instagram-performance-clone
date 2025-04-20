import React from "react";
import Recieved from "./atoms/Recieved";
import SentMsg from "./atoms/SentMsg";
import MessageInput from "./atoms/MessageInput";
import MessageHeader from "./atoms/MessageHeader";

const ChatSection = () => {
  return (
    <>
      <MessageHeader />
      <div className="bg-[#F5F5F5] min-h-screen px-[36px] py-[20px]">
        <div className="flex flex-col">
          <Recieved />
          <SentMsg />
          <Recieved />
        </div>
        <MessageInput />
      </div>
    </>
  );
};

export default ChatSection;
