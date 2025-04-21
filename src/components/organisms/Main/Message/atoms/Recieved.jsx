import React from "react";

const Recieved = ({ msg }) => {
  return (
    <div className="max-w-[75%]">
      <div className="w-fit mb-1 py-[7px] px-3 rounded-[15px] relative received bg-border text-primary self-start text-[15px] font-normal tracking-[0.3px]">
        {msg}
      </div>
    </div>
  );
};

export default Recieved;
