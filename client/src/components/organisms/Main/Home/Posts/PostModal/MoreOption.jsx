import React, { Suspense, useState } from "react";
import {
  MoreModalIcons,
  MoreOpPosition,
  RoutesIcons,
  UtilityIcons24,
} from "./index";
import {} from "./index";
const moreArr = [
  { name: "Report", color: true },
  { name: "Not interested" },
  { name: "Go to post" },
  { name: "Share to..." },
  { name: "Copy link" },
  { name: "Embed" },
  { name: "About this account" },
  { name: "Cancel", border: false },
];
const shareArr = [
  {
    name: "Share to Threads",
    icon: <UtilityIcons24 name="thread" viewBox="0 0 192 192" size="24" />,
  },
  { name: "Share to Facebook", icon: <UtilityIcons24 name="facebook" /> },
  { name: "Share to Messanger", icon: <RoutesIcons name="messages" /> },
  { name: "Share to Twitter", icon: <UtilityIcons24 name="twitter" /> },
  { name: "Share via Email", icon: <UtilityIcons24 name="email" /> },
  { name: "QR code", icon: <UtilityIcons24 name="qr" /> },
  { name: "Copy link", icon: <UtilityIcons24 name="link" /> },
  { name: "Cancel" },
];

const MoreOption = ({ setIsMoreOpen }) => {
  const [isShare, setIsShare] = useState(false);

  return (
    <Suspense>
      <MoreOpPosition setIsMoreOpen={setIsMoreOpen}>
        {isShare ? (
          <div className="flex flex-col justify-center py-1 w-full h-fit items-center">
            <div className="border-bottom relative w-full text-center py-2 border-b-[1px]">
              <p className="font-semibold">Share to...</p>
              <div></div>
              <div className="absolute right-2 top-1/2 -translate-1/2">
                <MoreModalIcons name="cross" />
              </div>
            </div>
            <div className="py-2 w-full h-[360px] overflow-y-auto">
              {shareArr.map(({ name, icon }, i) => {
                return (
                  <Sharebtn
                    key={i}
                    setshare={setIsShare}
                    name={name}
                    icon={icon}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center w-full items-center">
            {moreArr.map(({ name, color, border }, i) => {
              return (
                <Morebtn
                  key={i}
                  setshare={setIsShare}
                  name={name}
                  color={color}
                  border={border}
                />
              );
            })}
          </div>
        )}
      </MoreOpPosition>
    </Suspense>
  );
};

const Morebtn = ({ setshare, name, border = true, color = false }) => {
  const handleClick = (e) => {
    e.target.innerText === "Share to..." && setshare(true);
  };
  return (
    <div
      onClick={handleClick}
      className={`text-primary ${
        color && "text-red-500! font-semibold"
      } text-primary p-3 cursor-pointer w-full text-center ${
        border && "border-bottom border-b-[1px]"
      }`}
    >
      {name}
    </div>
  );
};
const Sharebtn = ({ setshare, name, icon }) => {
  const handleClick = (e) => {
    e.target.innerText === "Share to..." && setshare(true);
  };
  return (
    <div
      onClick={handleClick}
      className={`text-primary font-normal text-sm text-primary py-2 px-4 cursor-pointer w-full text-start`}
    >
      <div className="h-8 flex items-center justify-start gap-3">
        {icon}
        {name}
      </div>
    </div>
  );
};

export default MoreOption;
