import React, { Suspense } from "react";
import { Postcard, useGetpostsQuery, UtilityIcons24 } from "./index";

const Posts = () => {
  const { data, isError, isLoading, error } = useGetpostsQuery();
  return (
    <div className="max-w-[630px] mt-4 w-full h-auto flex flex-col gap-4 justify-center items-center">
      {isLoading ? (
        <div className="my-10 text-black animate-spin">
          <UtilityIcons24 name="loader" viewBox="0 0 100 100" />
        </div>
      ) : isError ? (
        "No post yet"
      ) : (
        data?.map((post) => {
          return <Postcard key={post.id} post={post} />;
        })
      )}
    </div>
  );
};

export default Posts;
