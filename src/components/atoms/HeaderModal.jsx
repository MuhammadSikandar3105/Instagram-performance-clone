import React from "react";
import { MoreModalIcons } from "./index";

const HeaderModal = ({ name, handleClick, icon = true, border = true }) => {
  return (
    <div
      className={`${
        border && "border-bottom border-b"
      } relative w-full text-center py-2`}
    >
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
