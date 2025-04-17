import React from "react";
import { HeaderModal, ShareModalPosition } from "./index";

const ShareModal = ({ setShare }) => {
  const handleClick = () => {
    setShare(false);
  };
  return (
    <ShareModalPosition setShare={setShare}>
      <HeaderModal name="Share" border={false} handleClick={handleClick} />
      <div>share to malik</div>
    </ShareModalPosition>
  );
};

export default ShareModal;
