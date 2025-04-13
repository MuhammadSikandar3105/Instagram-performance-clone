import React from "react";
import { MainContent, MoreBtn, ProInfoCard } from "./index";

const Postview = ({ image, proimg }) => {
  return (
    <MainContent>
      <div className="py-8 px-5">
        <div className="post flex items-center justify-center max-w-[673px] h-auto">
          <div className="image w-full h-auto">
            <img src={image} alt="" />
          </div>
          <div className="w-full h-auto">
            <ProInfoCard
              userName="Mr.Malik2189"
              name="Original audio"
              image={proimg}
            >
              <MoreBtn />
            </ProInfoCard>
          </div>
        </div>
      </div>
    </MainContent>
  );
};

export default Postview;
