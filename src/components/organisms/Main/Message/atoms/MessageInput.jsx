import React from "react";

const MessageInput = () => {
  return (
    <div className="mx-auto border w-[calc(100%-32px)] flex items-center rounded-[48px]">
      <input
        type="text"
        className="flex-1 border-0 p-[10px] outline-none rounded-[20px]"
        placeholder="Type your message here..."
      />
    </div>
  );
};

export default MessageInput;
