import React from "react";
import { UtilityIcons24 } from "../pages";

const PostActions = () => {
  return (
    <div className="w-full my-1 flex justify-between items-center">
      <div className="like flex">
        <div className="p-2 cursor-pointer">
          <UtilityIcons24 name="like" />
          {/* <UtilityIcons24 name="liked" viewBox='0 0 48 48' /> */}
        </div>
        <div className="p-2 cursor-pointer">
          <UtilityIcons24 name="comment" />
        </div>
        <div className="p-2 cursor-pointer">
          <UtilityIcons24 name="share" />
        </div>
      </div>
      <div className="p-2 cursor-pointer">
        <UtilityIcons24 name="SAVED" />
      </div>
    </div>
  );
};

export default PostActions;
