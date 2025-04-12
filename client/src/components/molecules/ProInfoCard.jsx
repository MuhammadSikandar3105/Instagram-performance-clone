import React from "react";
import { Proimage, Proname } from "./index";

const ProInfoCard = ({ image, userName, name, children, size, modal }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex gap-2 items-center justify-center">
        <Proimage image={image} size={size} modal={modal} />
        <div className="flex flex-col ">
          <Proname name={userName} modal={modal} />
          <div className="text-sm btn-color cursor-pointer font-normal">
            {name}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProInfoCard;
