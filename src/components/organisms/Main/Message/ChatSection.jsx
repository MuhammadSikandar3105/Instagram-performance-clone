import React from "react";
import Recieved from "./atoms/Recieved";
import SentMsg from "./atoms/SentMsg";
import MessageInput from "./atoms/MessageInput";
import MessageHeader from "./atoms/MessageHeader";

const ChatSection = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col overflow-y-hidden">
      <div className="h-[10vh] w-full flex items-center">
        <MessageHeader />
      </div>
      <div className="flex h-[80vh] p-4 overflow-y-auto flex-col">
        <Recieved msg="Hello" />
        <SentMsg msg="Hi" />
        <Recieved msg="How are you bro?" />
        <SentMsg msg="i am fine bro" />
        <SentMsg msg="how are you?" />
        <Recieved msg="i am also fine alhamdulilliah" />
        <Recieved msg="what are you doing in these days" />
        <Recieved msg="Any busy task or free" />
        <SentMsg msg="I am soo busy bro" />
        <SentMsg msg="because of project in office and also my personal project" />
        <Recieved msg="ok it's fine i also have a project for you if you free" />
        <Recieved msg="but it's fine" />
        <SentMsg msg="ok if when i free form these then i absolutely talk to you for project" />
        <SentMsg msg="if it's deadline are far then you can send me detail when i free from there then i satrted that!" />
        <Recieved msg="No it's fine, my client need this as early as possible" />
        <SentMsg msg="ok fine" />
      </div>
      <div className="h-[10vh] w-full flex items-center justify-center">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatSection;
