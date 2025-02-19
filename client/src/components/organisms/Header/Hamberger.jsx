import React from "react";
import { HiOutlineMenu, List } from "./index";

const Hamberger = ({ openmodal }) => {
  return (
    <div>
      <List
        Icon={<HiOutlineMenu size="28" className="text-secondary" />}
        spanid="more"
        spanname="More"
        handleModal={openmodal}
      />
    </div>
  );
};

export default React.memo(Hamberger);
