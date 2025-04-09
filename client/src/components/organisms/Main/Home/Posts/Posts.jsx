import React from "react";
import { Postcard } from "./index";

const Posts = () => {
  return (
    <div className="max-w-[630px] mt-4 w-full h-auto flex flex-col gap-8 justify-center items-center">
      <Postcard />
      <Postcard />
    </div>
  );
};

export default Posts;
