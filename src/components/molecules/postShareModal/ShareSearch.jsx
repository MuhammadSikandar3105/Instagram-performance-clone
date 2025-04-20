import React from "react";
import { proimg, ProInfoCard } from "./index";

const Cardsarr = [
  { image: proimg, name: "Ali_Husnain", userName: "ali_husnain.345" },
  { image: proimg, name: "Sarib_hassan", userName: "saribb_hassan.987" },
  { image: proimg, name: "Muhammad_Amir", userName: "muhammad_amir432" },
  { image: proimg, name: "Taha_Alvi", userName: "taha_tlvi094" },
  { image: proimg, name: "Aqib_shah", userName: "aqib_shah786" },
  { image: proimg, name: "Hassan_Ali", userName: "hassan_ali124" },
  { image: proimg, name: "Wahab_Malik", userName: "wahab_malik654" },
  { image: proimg, name: "firdous_Khan", userName: "firdous_khan890" },
  { image: proimg, name: "Hiba_ali", userName: "hiba_ali543" },
];

const ShareSearch = ({ selected, search }) => {
  const handleClick = (index) => {
    selected({ is: true, id: index });
    search(false);
  };

  return (
    <div className="flex items-start w-full p-2 h-[57%] static overflow-y-scroll overflow-x-hidden">
      <div className="gap-x-4 gap-y-1 flex flex-col flex-wrap items-center w-full">
        {Cardsarr?.map(({ image, name, userName }, i) => {
          return (
            <div
              onClick={() => handleClick(i)}
              key={i}
              className="hover py-2 px-2 rounded-md cursor-pointer w-full"
            >
              <ProInfoCard
                classses="font-normal!"
                modal={false}
                image={image}
                size="44px"
                name={userName}
                userName={name}
              >
                <div className="w-6 h-6 rounded-full border"></div>
              </ProInfoCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShareSearch;
