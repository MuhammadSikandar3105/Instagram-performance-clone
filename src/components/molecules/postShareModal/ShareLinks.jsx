import React, { Suspense } from "react";
import { proimg, ShareCard } from "./index";

const ShareLinks = ({ selectedId }) => {
  const Linksarr = [
    { image: proimg, text: "Copy link" },
    { image: proimg, text: "Copy link" },
    { image: proimg, text: "Copy link" },
    { image: proimg, text: "Copy link" },
    { image: proimg, text: "Copy link" },
    { image: proimg, text: "Copy link" },
    { image: proimg, text: "Copy link" },
    { image: proimg, text: "Copy link" },
  ];
  return (
    <div className="ScrollCon flex border-t border-top items-center w-full h-[21%] gap-1 overflow-y-hidden overflow-x-scroll">
      {selectedId.is ? (
        <div className="flex items-center justify-center w-full">
          <p className="bg-[#0095f6] text-white w-[70%] rounded-md text-center cursor-pointer py-2">
            Send
          </p>
        </div>
      ) : (
        Linksarr?.map(({ image, text }, i) => {
          return (
            <Suspense key={i}>
              <ShareCard image={image} link={true}>
                {text}
              </ShareCard>
            </Suspense>
          );
        })
      )}
    </div>
  );
};

export default ShareLinks;
