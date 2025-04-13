import React from "react";
import { MoreBtn, PostActions, proimg, ProInfoCard } from "./index";

const Postcard = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[470px] border-l-0 border-r-0 border-t border-b py-3 border w-full">
      <div className="w-full pb-3 pl-1">
        <ProInfoCard
          userName="Mr.Malik2189"
          name="Original audio"
          image={proimg}
        >
          <MoreBtn />
        </ProInfoCard>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="relative max-w-[470px] w-full pb-[125%] cursor-grab! rounded-sm overflow-hidden bg-black h-auto">
          <div className="w-full absolute top-1/2 left-1/2 -translate-1/2 ">
            <img
              src={proimg}
              alt="post image"
              className="object-contain object-center w-fit"
            />
          </div>
        </div>
      </div>
      <PostActions />
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
