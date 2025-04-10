import React from "react";
import { useSelector } from "react-redux";
import { MoreModalIcons, usemodal } from "./index";

const CreatePosition = React.memo(({ children, setDiscrad, isform }) => {
  const { closecreate } = usemodal();
  const darkTheme = useSelector((state) => state.theme.darktheme);
  const { pic } = useSelector((state) => state.createForm);
  const { createmodal } = useSelector((state) => state.createModal);

  const handleClick = (e) => {
    e.stopPropagation();
    pic && createmodal && setDiscrad(true);
    !pic && createmodal && closecreate();
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#00000076] w-full h-full fixed top-1/2 -translate-y-1/2"
    >
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
});

export default CreatePosition;
