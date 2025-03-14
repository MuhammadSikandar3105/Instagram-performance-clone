import React, { Suspense } from "react";
import { CreatePosition, Gragphotos } from "./index";
const CreateModal = ({ navbarWidth }) => {
  return (
    <CreatePosition navbarWidth={navbarWidth}>
      <Suspense>
        <h2 className=" font-semibold text-center py-2">Create new post</h2>
        <div className="h-[1px] my-2 w-[calc(100%)] borderlight"></div>
        <div className="absolute top-1/2 left-1/2 -translate-1/2 flex justify-center items-center flex-col">
          <Gragphotos />
          <h2 className="mb-6 mt-4 text-xl">Drag photos and videos here</h2>
          <input type="file" name="file" id="choosefile" className="hidden " />
          <label
            htmlFor="choosefile"
            className="py-[7px] px-4 text-[14px] font-medium text-white bg-[#0094f6e9] cursor-pointer rounded-[8px] hover:bg-[rgb(0,149,246)] transition"
          >
            Select from Computer
          </label>
        </div>
      </Suspense>
    </CreatePosition>
  );
};

export default CreateModal;
