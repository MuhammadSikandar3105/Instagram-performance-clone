import React, { Suspense } from "react";
import { Search, SearchPosition } from "./index";
const SeachModal = ({ navbarWidth }) => {
  return (
    <SearchPosition navbarWidth={navbarWidth}>
      <Suspense>
        <div className="flex flex-col justify-between items-start">
          <div className="searchTag pt-3 pb-9 my-2 pr-3 pl-6 mx-0">
            <h2 className="font-bold">Search</h2>
          </div>
          <Search type="text" name="search" />
          {/* horizantala line */}
          <div className="h-[1px] my-2 w-[calc(100%)]  borderlight"></div>
        </div>
      </Suspense>
    </SearchPosition>
  );
};

export default SeachModal;
