import React from "react";
import {} from "../index";
import { proimg, proimg1, proimg2, proimg3, ProInfoCard } from "../Posts";

const SuggFriendsArr = [
  { name: "Mr.Malik", userName: "mr.malik2189", image: proimg1 },
  { name: "Mr.Malik", userName: "mr.malik2189", image: proimg2 },
  { name: "Mr.Malik", userName: "mr.malik2189", image: proimg3 },
  { name: "Mr.Malik", userName: "mr.malik2189", image: proimg1 },
  { name: "Mr.Malik", userName: "mr.malik2189", image: proimg2 },
];
const FriendsSugg = () => {
  return (
    <div className="max-w-[383px] w-full h-auto pl-12 pr-4 mt-9 hidden lg:flex flex-col justify-center items-center">
      <div className=" w-full">
        <ProInfoCard
          userName="mr.malik2189"
          name="Mr.Malik"
          image={proimg}
          size={44}
          modal={false}
        >
          <div className="btn text-xs font-semibold cursor-pointer text-[#0095F6]">
            Switch
          </div>
        </ProInfoCard>
      </div>
      <div className="w-full mb-2 mt-5 flex justify-between items-center">
        <div className="btn-color font-semibold text-sm">Suggested for you</div>
        <div className="text-secondary font-semibold text-xs cursor-pointer hover:btn-color">
          See All
        </div>
      </div>
      <div className="sugg w-full flex flex-col items-center justify-center my-2">
        {SuggFriendsArr.map(({ name, userName, image }, i) => {
          return (
            <div key={i} className="my-2 w-full">
              <ProInfoCard
                userName={userName}
                name={name}
                image={image}
                size={44}
              >
                <div className="btn text-xs font-semibold cursor-pointer text-[#0095F6]">
                  Follow
                </div>
              </ProInfoCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendsSugg;
