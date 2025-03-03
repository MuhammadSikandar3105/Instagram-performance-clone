import React, { Suspense } from "react";
import { MoreModalItem, MoreModalIcons } from "./index";
import { useSelector } from "react-redux";
const MoreItems = ({ openmodal }) => {
  const darktheme = useSelector((state) => state.theme.darktheme);

  return (
    <Suspense>
      <div className="flex flex-col justify-between items-start">
        {/* settings */}
        <MoreModalItem
          image={<MoreModalIcons name="Setting" />}
          children="Settings"
        />
        {/* your activity */}
        <MoreModalItem
          image={<MoreModalIcons name="Activity" />}
          children="Your Activity"
        />
        {/* saved */}
        <MoreModalItem
          image={<MoreModalIcons name="Save" />}
          children="Saved"
        />
        {/* switch appearence */}
        <MoreModalItem
          image={
            darktheme ? (
              <MoreModalIcons name="Moon" />
            ) : (
              <MoreModalIcons name="sun" />
            )
          }
          children="Switch Appearence"
          modalname="appearence"
          handleOpenmodal={openmodal}
        />
        <MoreModalItem
          image={<MoreModalIcons name="Report" />}
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

export default MoreItems;
