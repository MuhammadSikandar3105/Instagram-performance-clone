import React from "react";

const MessageInput = () => {
  return (
    <div className="fixed bottom-[16px] right-[30px] mx-auto w-[calc(70%-100px)] flex items-center p-[10px_10px_10px_20px] bg-white rounded-[48px]">
      <input
        type="text"
        className="flex-1 border-0 p-[10px] outline-none rounded-[20px]"
        placeholder="Type your message here..."
      />
    </div>
  );
};

export default MessageInput;
