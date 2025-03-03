import React from "react";
import { useSelector } from "react-redux";

const CreatePosition = ({ children }) => {
  const darkTheme = useSelector((state) => state.theme.darktheme);

  return (
    <div
      className={`max-w-[397px] w-full h-auto top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-[16px] border-[1px] searchmodalshadow bg-primary text-secondary absolute 
         ${darkTheme && "darkmode"}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default CreatePosition;
