import React, { Suspense } from "react";
import { CreatePosition, SearchInput } from "./index";
const CreateModal = ({ navbarWidth }) => {
  return (
    <CreatePosition navbarWidth={navbarWidth}>
      <Suspense>
        <div className="flex flex-col justify-between items-start">
          <div className="searchTag pt-3 pb-9 mt-2 pr-[14px] pl-6 mx-0">
            <h2 className="font-[600] text-2xl block w-full">Notifications</h2>
          </div>
          <SearchInput />
          {/* horizantala line */}
        </div>
        <div className="h-[1px] my-2 w-[calc(100%)] borderlight"></div>
        <div className="pt-1  flex-1 flex flex-col overflow-y-auto relative">
          <h3 className="font-semibold text text-secondary mx-6 my-2">
            Recent
          </h3>
          {/* dynamic it if there is result show handle according to that */}
          <div className="w-full flex-1 flex flex-col items-center justify-between">
            <p className="absolute top-1/2 -translate-y-1/2 lightGray font-semibold text-[14px]">
              No recent searches.
            </p>
          </div>
        </div>
      </Suspense>
    </CreatePosition>
  );
};

export default CreateModal;
