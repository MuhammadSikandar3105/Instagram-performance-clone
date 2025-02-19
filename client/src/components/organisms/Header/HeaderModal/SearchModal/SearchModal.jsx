import React, { Suspense } from "react";
import { MoreModalItem, TbFileReport } from "./index";

const SeachModal = () => {
  return (
    <Suspense>
      <div className="flex flex-col justify-between items-start">
        <MoreModalItem
          image={<TbFileReport size="16" className="text-secondary" />}
          children="Report a Problem"
        />
        <div className="h-[6px] my-2 w-[calc(100%+16px)]  borderlight -mx-2"></div>
        {/* switch acounts */}
        <MoreModalItem children="Switch Acounts" />
        <div className="h-[1px] my-2 w-[calc(100%+16px)]  borderlight -mx-2"></div>
        <div className="cursor-pointer w-full modalhover rounded-[10px]">
          <p className="p-4 text-[14px] ">Log out</p>
        </div>
      </div>
    </Suspense>
  );
};

export default SeachModal;
