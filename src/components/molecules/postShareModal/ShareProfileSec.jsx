import React, { Suspense } from "react";
import { proimg, ShareCard } from "./index";

const ShareProfileSec = ({ selectedId }) => {
  const Cardsarr = [
    { image: proimg, name: "Ali_Husnain" },
    { image: proimg, name: "Sarib_hassan" },
    { image: proimg, name: "Muhammad_Amir" },
    { image: proimg, name: "Taha_Alvi" },
    { image: proimg, name: "Aqib_shah" },
    { image: proimg, name: "Hassan_Ali" },
    { image: proimg, name: "Wahab_Malik" },
    { image: proimg, name: "firdous_Khan" },
    { image: proimg, name: "Hiba_ali" },
  ];
  return (
    <div className="flex items-start w-full p-2 h-[57%] static overflow-y-scroll overflow-x-hidden">
      <div className="cards gap-x-4 gap-y-1 flex flex-wrap items-center">
        {Cardsarr?.map(({ image, name }, i) => {
          return (
            <Suspense key={i}>
              <ShareCard
                id={selectedId.id === i && selectedId.is}
                image={image}
              >
                {name}
              </ShareCard>
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default ShareProfileSec;
