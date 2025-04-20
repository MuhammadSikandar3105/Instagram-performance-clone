import React from "react";
import MessageHeader from "./atoms/MessageHeader";
import { ProInfoCard } from "../../../molecules";
import { proimg } from "./index";

const MsgSidebar = () => {
  return (
    <div className="max-w-[25%] flex flex-col fixed w-full h-[100vh] border-r border left-[73px] bg-primary overflow-hidden">
      <MessageHeader />
      <MessageHeader />
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
