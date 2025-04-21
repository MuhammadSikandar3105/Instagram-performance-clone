import React from "react";

const SentMsg = ({ msg }) => {
  return (
    <div className="max-w-[75%] mb-1 bg-[#0095f6] text-white py-[7px] px-3 rounded-[24px] relative self-end">
      {msg}
    </div>
  );
};

export default SentMsg;
