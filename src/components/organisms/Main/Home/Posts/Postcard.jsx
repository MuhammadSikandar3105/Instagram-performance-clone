import React from "react";
import {
  CommentInput,
  MoreBtn,
  PostActions,
  proimg,
  ProInfoCard,
  useGetusersQuery,
} from "./index";

const Postcard = ({ post }) => {
  const { data } = useGetusersQuery();
  const user = data?.find((user) => user.id === post.userid);
  return (
    <div
      className={`flex flex-col items-center justify-center max-w-[470px] border-l-0 border-r-0 border-t-0 py-0 pb-3 w-full border-b border`}
    >
      <div className="w-full pb-3 pl-1">
        <ProInfoCard
          userName={user?.name}
          detail="Original audio"
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
        {!post?.likehide && (
          <p className="text-sm font-bold ">
            {post?.likes?.length} {post?.likes?.length > 1 ? "Likes" : "Like"}
          </p>
        )}
      </div>
      {!post?.caption.length === 0 && (
        <div className="caption w-full mt-2">
          <p className="text-sm text-secondary font-semibold">
            {user?.name}{" "}
            <span className="font-normal">
              {post?.caption}
              {"... "}
              <span className="text-[#737373] cursor-pointer ">more</span>
            </span>
          </p>
        </div>
      )}
      {!post?.commenthide && (
        <>
          <div className="viewcomments w-full mt-2">
            <p className="text-[#737373] text-sm cursor-pointer">
              View all {post?.comments?.length} comments
            </p>
          </div>
          <CommentInput />
        </>
      )}
    </div>
  );
};

export default Postcard;
