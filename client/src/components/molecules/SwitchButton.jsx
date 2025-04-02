import React from "react";

const SwitchButton = ({ condition }) => {
  return (
    <div
      className={`cursor-pointer flex w-4 h-4 toggleBg ${
        condition ? "justify-start" : "justify-end"
      } items-center rounded-[10px] py-0 px-3`}
    >
      <div
        className={`rounded-[10px] w-1 p-[6px] -mx-[2px] h-1 ${
          condition ? "bg-black" : "bg-white"
        }`}
      ></div>
    </div>
  );
};

export default SwitchButton;
