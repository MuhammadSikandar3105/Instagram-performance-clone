import React from "react";
import { useSelector } from "react-redux";

const MoreOptionPosition = ({ children, setIsMoreOpen }) => {
  const darkTheme = useSelector((state) => state.theme.darktheme);

  const handleClick = () => {
    setIsMoreOpen(false);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#000000ae] w-full h-full fixed top-1/2 -translate-y-1/2"
    >
      <div
        className={`max-w-[400px] overflow-hidden w-full h-fit top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-[16px] searchmodalshadow modalbg text-secondary absolute 
         ${darkTheme && "darkmode"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MoreOptionPosition;
