import React from "react";
import { useSelector } from "react-redux";
import { MoreModalIcons } from "./index";

const CreatePosition = ({ children, isform }) => {
  const darkTheme = useSelector((state) => state.theme.darktheme);

  return (
    <div className="bg-[#00000076] w-full h-full absolute top-1/2 -translate-y-1/2">
      <div
        className={`${
          isform ? "max-w-[857px]" : "max-w-[557px]"
        } max-h-[557px] overflow-hidden w-full h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-[16px] searchmodalshadow modalbg text-secondary absolute 
         ${darkTheme && "darkmode"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
      <span className="absolute p-2 cursor-pointer z-10 top-[10px] right-[10px]">
        <MoreModalIcons name="cross" />
      </span>
    </div>
  );
};

export default CreatePosition;
