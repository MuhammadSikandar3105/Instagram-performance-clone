import React, { Suspense, useState } from "react";
import { UtilityIcons24 } from "../pages";
import Modal from "./Modal/Modal";
import ShareModal from "./postShareModal/ShareModal";

const PostActions = () => {
  const [isSharemodal, setisSharemodal] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setisSharemodal(true);
  };

  return (
    <div className="w-full my-1 flex justify-between items-center">
      <div className="like flex">
        <div
          onClick={() => setLiked((prev) => !prev)}
          className="p-2 cursor-pointer hover:text-[#737373]"
        >
          {liked ? (
            <div className="text-red-500 transition">
              <UtilityIcons24 name="liked" viewBox="0 0 48 48" />
            </div>
          ) : (
            <UtilityIcons24 name="like" />
          )}
        </div>
        <div className="p-2 cursor-pointer hover:text-[#737373]">
          <UtilityIcons24 name="comment" />
        </div>
        <div
          onClick={handleClick}
          className="p-2 cursor-pointer hover:text-[#737373]"
        >
          <UtilityIcons24 name="share" />
        </div>
      </div>
      <div className="p-2 cursor-pointer hover:text-[#737373]">
        <UtilityIcons24 name="SAVED" />
      </div>
      <Suspense>
        <Modal>
          {isSharemodal && <ShareModal setShare={setisSharemodal} />}
        </Modal>
      </Suspense>
    </div>
  );
};

export default PostActions;
