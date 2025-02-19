import React, { Suspense } from "react";
import {
  FiSettings,
  FiMoon,
  FiActivity,
  FiSave,
  MoreModalItem,
  TbFileReport,
  FiSun,
} from "./index";
import { useSelector } from "react-redux";
const MoreItems = ({ openmodal }) => {
  const darktheme = useSelector((state) => state.theme.darktheme);

  return (
    <Suspense>
      <div className="flex flex-col justify-between items-start">
        {/* settings */}
        <MoreModalItem
          image={<FiSettings size="16" className="text-secondary" />}
          children="Settings"
        />
        {/* your activity */}
        <MoreModalItem
          image={<FiActivity size="16" className="text-secondary" />}
          children="Your Activity"
        />
        {/* saved */}
        <MoreModalItem
          image={<FiSave size="16" className="text-secondary" />}
          children="Saved"
        />
        {/* switch appearence */}
        <MoreModalItem
          image={
            darktheme ? (
              <FiMoon size="16" color="white" />
            ) : (
              <FiSun size="16" color="black" />
            )
          }
          children="Switch Appearence"
          modalname="appearence"
          handleOpenmodal={openmodal}
        />
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

export default MoreItems;
