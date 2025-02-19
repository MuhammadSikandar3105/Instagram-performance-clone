import React, { Suspense } from "react";
import {
  FiChevronLeft,
  FiMoon,
  FiSun,
  MoreModalPosition,
  darktheme2,
} from "./index";
import { useDispatch, useSelector } from "react-redux";

const ApearenceModal = ({ goback }) => {
  const darktheme = useSelector((state) => state.theme.darktheme);
  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(darktheme2());
  };

  return (
    <MoreModalPosition>
      <Suspense>
        <div className="flex flex-col justify-between items-start">
          {/* switch appearence */}
          <div className="flex flex-row justify-between items-center w-full rounded-[10px] text-[14px] py-[7px] pl-0 pr-1">
            <div className="apearence flex justify-start items-center gap-3">
              <div
                className="cursor-pointer modalhover p-1 rounded-[5px]"
                onClick={goback}
              >
                <FiChevronLeft size="16" className="btn-color" />
              </div>
              <p className="font-[600] text-[16px]">Switch appearance</p>
            </div>
            {darktheme ? (
              <FiMoon size="16" color="white" />
            ) : (
              <FiSun size="16" color="black" />
            )}
          </div>
          <div className="h-[2px] my-2 w-[calc(100%+16px)]  borderlight -mx-2"></div>
          {/* switch theme */}
          <div
            className="self-end modalhover cursor-pointer rounded-[10px] flex justify-between items-center w-full p-[14px] text-[14px]"
            onClick={handleclick}
          >
            <p>Dark mode</p>
            <div
              className={`cursor-pointer flex w-4 h-4 toggleBg ${
                darktheme ? "justify-start" : "justify-end"
              } items-center rounded-[10px] py-0 px-3`}
            >
              <div
                className={`rounded-[10px] w-1 p-[6px] -mx-[2px] h-1 ${
                  darktheme ? "bg-black" : "bg-white"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </Suspense>
    </MoreModalPosition>
  );
};

export default ApearenceModal;
