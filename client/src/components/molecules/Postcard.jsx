import React from "react";
import { Liked, proimg, UtilityIcons24 } from "./index";

const Postcard = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[360px] border-l-0 border-r-0 border-t border-b py-3 border w-full ">
      <div className="header w-full pb-3 pl-1 flex justify-between items-center">
        <div className="profile flex items-center justify-center">
          <div
            className={`relative mr-2 rounded-full p-1 w-6 h-6 overflow-hidden`}
          >
            <img
              src={proimg}
              className="absolute top-1/2 left-1/2 -translate-1/2"
              alt=""
            />
          </div>
          <div className="proname flex flex-col items-start justify-start">
            <p className="text-sm text-secondary font-semibold">malik786</p>
            <p className="text-xs">Original audio</p>
          </div>
        </div>
        <div className="hamberger cursor-pointer">
          <UtilityIcons24 name="more" size="24" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center ">
        <div className="relative max-w-[360px] pb-[125%] overflow-hidden bg-black h-auto overflow-x-hidden-hidden w-full">
          <div className="w-full absolute top-0 left-0 ">
            <img
              src={proimg}
              alt="post image"
              className="object-contain object-center w-full"
            />
          </div>
        </div>
      </div>
      <div className="events w-full my-1 flex justify-between items-center">
        <div className="like flex">
          <div className="p-2 cursor-pointer">
            <UtilityIcons24 name="like" size="24" />
            {/* <Liked  text-[#ff3040]/> */}
          </div>
          <div className="p-2 cursor-pointer">
            <UtilityIcons24 name="comment" size="24" />
          </div>
          <div className="p-2 cursor-pointer">
            <UtilityIcons24 name="share" size="24" />
          </div>
        </div>
        <div className="p-2 cursor-pointer">
          <UtilityIcons24 name="SAVED" size="24" />
        </div>
      </div>
      <div className="likes w-full flex items-start">
        <p className="text-sm font-bold ">0 Like</p>
      </div>
      <div className="caption w-full mt-2">
        <p className="text-sm text-secondary font-semibold">
          malik786{" "}
          <span className="font-normal">
            Leaked Video of Dhoom 4 Shooting 😱...{" "}
            <span className="text-[#737373] cursor-pointer ">more</span>
          </span>
        </p>
      </div>
      <div className="viewcomments w-full mt-2">
        <p className="text-[#737373] text-sm cursor-pointer">
          View all 143 comments
        </p>
      </div>
      <div className="comment relative w-full h-fit">
        <input
          type="text"
          placeholder="Add a comment..."
          className="py-1 focus:outline-none"
        />
        <div className="text-[#0095F6] font-semibold absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer ">
          Post
        </div>
      </div>
    </div>
  );
};

export default Postcard;
