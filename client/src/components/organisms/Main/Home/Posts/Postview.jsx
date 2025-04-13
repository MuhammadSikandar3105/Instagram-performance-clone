import React from "react";
import {
  MainContent,
  MoreBtn,
  PostActions,
  Proimage,
  proimg,
  ProInfoCard,
} from "./index";

const Postview = ({ image }) => {
  return (
    <MainContent>
      <div className="w-full m-auto py-8 px-5 flex items-center justify-center">
        <div className="post flex border justify-center max-w-[673px] min-h-[350px] overflow-hidden">
          <div className="bg-black w-full flex items-center justify-center">
            <div className="img w-full h-full flex items-center">
              <img src={proimg} alt="" className="w-full" />
            </div>
          </div>
          <div className="w-full h-auto flex flex-col justify-between">
            <div className="px-4 py-2 w-full h-[13.3%] border-bottom border-b">
              <ProInfoCard
                userName="Mr.Malik2189"
                detail="Original audio"
                image={proimg}
              >
                <MoreBtn />
              </ProInfoCard>
            </div>
            <div className="relative h-[55%] overflow-y-scroll">
              <div className="p-4 w-full absolute">
                <div className="detail w-full">
                  <ProInfoCard
                    userName="Mr.Malik2189"
                    captions="At al-kabab hotel #learnfromkhaby #commedy"
                    image={proimg}
                  ></ProInfoCard>
                </div>
                <div className="w-full overflow-hidden h-full flex flex-col items-center justify-between">
                  No comment yet
                </div>
              </div>
            </div>
            <div className="w-full h-[31.7%] flex flex-col justify-between">
              <PostActions />
              <div className="likes px-4 w-full flex items-start">
                <p className="text-sm font-bold ">0 Like</p>
              </div>
              <div className="likes px-4 w-full flex items-start">
                <p className="text-xs border-color">March 11</p>
              </div>
              <div className="flex py-3 px-4 w-full h-fit">
                <Proimage image={proimg} />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="py-1 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContent>
  );
};

export default Postview;
