import React from "react";
import { MoreModalIcons } from "../../index";

const HeaderModal = ({ name, handleClick, icon = true }) => {
  return (
    <div className="border-bottom relative w-full text-center py-2 border-b-[1px]">
      <p className="font-semibold">{name}</p>
      {icon && (
        <div
          onClick={handleClick}
          className="absolute cursor-pointer right-2 top-1/2 -translate-1/2"
        >
          <MoreModalIcons name="cross" />
        </div>
      )}
    </div>
  );
};

export default HeaderModal;
