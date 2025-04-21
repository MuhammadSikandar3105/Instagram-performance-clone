import React from "react";
import { ProInfoCard, UtilityIcons24 } from "../../../molecules";
import { MoreModalIcons, proimg } from "./index";

const MsgSidebar = () => {
  return (
    <div className="max-w-[27.1%] flex-col w-full h-[100vh] border-r border-right bg-primary overflow-hidden">
      <div className="flex items-center justify-between pt-9 pb-3 px-6 w-full h-[10%]">
        <div className="flex items-center gap-2">
          <p className="text-xl font-bold">mr.malik2186</p>
          <div className="rotate-[-180deg] cursor-pointer">
            <MoreModalIcons name="back" size="12" />
          </div>
        </div>
        <UtilityIcons24 name="newmsg" />
      </div>

      <div className="h-[90%] w-full overflow-auto">
        {Array.from({ length: 12 }).map(() => {
          return (
            <div
              key={crypto.randomUUID()}
              className="p-4 cursor-pointer hover:bg-[#737373aa]"
            >
              <ProInfoCard
                image={proimg}
                modal={false}
                size="44px"
                userName="Ali Hussnain"
                name="mr.malik2108"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MsgSidebar;
