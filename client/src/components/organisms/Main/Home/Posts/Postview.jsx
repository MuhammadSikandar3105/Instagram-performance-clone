import React from "react";
import {
  Commentcard,
  CommentInput,
  MainContent,
  MoreBtn,
  PostActions,
  Proimage,
  proimg,
  proimg1,
  proimg2,
  proimg3,
  ProInfoCard,
} from "./index";
const CommentArr = [
  { uname: "mr.malik2192", image: proimg1, comment: "sooo good", creply: true },
  { uname: "sarib_hassan", image: proimg2, comment: "Nice pic bro" },
  { uname: "shoaib_malik2145", image: proimg3, comment: "whaaa" },
  { uname: "taha21", image: proimg, comment: "kia baat hai", creply: true },
  { uname: "Aqib_alvi786", image: proimg2, comment: "tooo good" },
  { uname: "zain_malik765", image: proimg3, comment: "wha", creply: true },
];
const Postview = ({ image, comment = true }) => {
  return (
    <MainContent>
      <div className="w-full pt-8 px-5 flex justify-center">
        <div className="post flex borderr pb-14 border-b border-0 border-bottom justify-center max-w-[673px] min-h-[450px] overflow-hidden">
          <div className="flex border justify-center overflow-hidden">
            <div className="bg-black w-full flex items-center justify-center">
              <div className="img w-full h-full flex items-center">
                <img src={proimg} alt="" className="w-full" />
              </div>
            </div>
            <div className="max-w-[40%] w-full h-auto flex flex-col justify-between">
              <div className="px-4 py-2 w-full h-[11%] border-bottom border-b">
                <ProInfoCard
                  userName="Mr.Malik2189"
                  detail="Original audio"
                  image={proimg}
                >
                  <MoreBtn />
                </ProInfoCard>
              </div>
              <div className="relative h-[61%] overflow-y-scroll">
                <div className="px-4 py-2 w-full h-full flex flex-col absolute">
                  <div className="detail w-full h-fit">
                    <ProInfoCard
                      userName="Mr.Malik2189"
                      captions="At al-kabab hotel #learnfromkhaby #commedy"
                      image={proimg}
                    ></ProInfoCard>
                  </div>
                  <div
                    className={`w-full py-4 h-full flex flex-col items-center ${
                      !comment && "justify-center"
                    }`}
                  >
                    {comment ? (
                      <>
                        {CommentArr?.map(
                          ({ uname, comment, image, creply }, i) => {
                            return (
                              <Commentcard
                                key={i}
                                uname={uname}
                                comment={comment}
                                image={image}
                                creply={creply}
                              />
                            );
                          }
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-2xl">No comment yet</p>
                        <p className="text-sm">Start the conversation.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full h-[28%] flex border-t borderr flex-col justify-between">
                <div className="px-2 flex flex-col">
                  <PostActions />
                  <div className="likes px-2 w-full flex flex-col">
                    <p className="text-sm font-bold ">0 Like</p>
                    <p className="text-xs border-color">March 11</p>
                  </div>
                </div>
                <div className="flex py-3 px-4 w-full h-fit">
                  <div className="w-fit">
                    <Proimage image={proimg} modal={false} />
                  </div>
                  <CommentInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContent>
  );
};

export default Postview;
