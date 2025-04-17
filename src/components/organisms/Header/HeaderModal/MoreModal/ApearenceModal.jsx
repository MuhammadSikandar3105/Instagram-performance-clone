import React, { Suspense } from "react";
import {
  MoreModalIcons,
  MoreModalPosition,
  SwitchButton,
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
                className="cursor-pointer modalhover mt-1 p-1 rounded-[5px]"
                onClick={goback}
              >
                <div className="rotate-[-90deg]">
                  <MoreModalIcons name="back" size="12" />
                </div>
              </div>
              <p className="font-[600] text-[16px]">Switch appearance</p>
            </div>
            {darktheme ? (
              <MoreModalIcons name="Moon" />
            ) : (
              <MoreModalIcons name="sun" />
            )}
          </div>
          <div className="h-[1px] my-2 w-[calc(100%+16px)]  borderlight -mx-2"></div>
          {/* switch theme */}
          <div
            className="self-end modalhover cursor-pointer rounded-[10px] flex justify-between items-center w-full p-[14px] text-[14px]"
            onClick={handleclick}
          >
            <p>Dark mode</p>
            <SwitchButton condition={darktheme} />
          </div>
        </div>
      </Suspense>
    </MoreModalPosition>
  );
};

export default ApearenceModal;
