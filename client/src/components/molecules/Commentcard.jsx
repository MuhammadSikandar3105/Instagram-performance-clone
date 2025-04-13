import React from "react";
import ProInfoCard from "./ProInfoCard";
import { UtilityIcons24 } from "./PostMoreModal";

const Commentcard = ({ image, comment, creply = false, uname }) => {
  return (
    <div className="detail w-full h-fit">
      <ProInfoCard userName={uname} captions={comment} image={image}>
        <div className="btn-color cursor-pointer">
          <UtilityIcons24 name="like" size="18" />
        </div>
      </ProInfoCard>
      <div className="likes flex gap-3 btn-color text-xs ml-12 py-2 font-medium">
        <p>3 likes</p>
        <p className="cursor-pointer">Reply</p>
      </div>
      {creply && (
        <div className=" w-full justify-center flex items-center gap-3 btn-color text-xs py-2 font-medium">
          <p className="cursor-pointer"> View all 2 replies</p>
        </div>
      )}
    </div>
  );
};

export default Commentcard;
