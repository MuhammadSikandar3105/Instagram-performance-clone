import React, { useRef } from "react";

const MoreModalItem = React.memo(
  ({ image, children, modalname, handleOpenmodal }) => {
    const buttonRef = useRef(null);
    return (
      <div
        onClick={() => handleOpenmodal && handleOpenmodal(modalname)}
        ref={buttonRef}
        className="cursor-pointer flex flex-row justify-start items-center w-full modalhover rounded-[10px] text-[14px] p-4"
      >
        {image && <div className="w-[30px] h-[18px]">{image}</div>}
        <p>{children}</p>
      </div>
    );
  }
);

export default MoreModalItem;
