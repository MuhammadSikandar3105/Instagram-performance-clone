import React from "react";
import { Input, RxCross1 } from "./index";

const SearchInput = () => {
  return (
    <>
      <div className="input w-full px-4 flex relative mb-4">
        <Input
          type="text"
          name="name"
          classes="w-full h-[40px] px-3 py-3 outline-0 bg-border rounded-[8px] border-[1px] inputborder relative"
        />
        <div className="cross absolute top-1/2 right-7 transform -translate-y-1/2 ">
          <div className="cancel-svg relative w-4 h-4 rounded-full crossbg">
            <RxCross1
              size={9}
              className="absolute borderColor top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchInput;
