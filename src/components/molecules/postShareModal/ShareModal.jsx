import React, { useRef, useState } from "react";
import { HeaderModal, RoutesIcons, ShareModalPosition } from "./index";
import { proimg } from "../PostMoreModal";
import Proimage from "../../atoms/Proimage";

const cards_arr = 12;

const ShareModal = ({ setShare }) => {
  const [isSearch, setIsSearch] = useState(false);
  const cardRef = useRef(null);
  const [cardsarr, setCardsarr] = useState(new Array(cards_arr).fill(""));
  const handleClick = () => {
    setShare(false);
  };
  return (
    <ShareModalPosition setShare={setShare}>
      <div className="w-full h-[22%]">
        <div className="px-4 pt-2">
          <HeaderModal name="Share" border={false} handleClick={handleClick} />
        </div>
        <div className="flex p-4 items-center w-full">
          <div className="flex items-center rounded-md bg-darkgray w-full">
            <div className="ml-4 lightGray">
              <RoutesIcons name="Search" size="16" />
            </div>
            <input
              onClick={() => setIsSearch(true)}
              className="bg-transparent w-full p-2 text-black outline-0 placeholder:lightGray"
              placeholder="Search"
            />
          </div>
          {isSearch && (
            <div
              onClick={() => setIsSearch(false)}
              className="button px-4 cursor-pointer"
            >
              Cancel
            </div>
          )}
        </div>
      </div>
      {isSearch ? (
        <div className="flex items-start w-full p-2 h-[57%] static overflow-y-scroll overflow-x-hidden">
          <div className="gap-x-4 gap-y-1 flex flex-col flex-wrap items-center w-full">
            {cardsarr?.map(() => {
              return (
                <div className="cursor-pointer flex justify-between items-center gap-3 p-2 w-full h-auto hovergray rounded-md">
                  <div className="flex items-center gap-2">
                    <Proimage image={proimg} modal={false} size="44px" />
                    <div className="text flex flex-col items-start">
                      <h3 className="text-sm font-normal text-center">
                        Ali Chishti
                      </h3>
                      <h3 className="text-xs lightGray font-normal text-center">
                        alihusnain.5680
                      </h3>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border"></div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex items-start w-full p-2 h-[57%] static overflow-y-scroll overflow-x-hidden">
          <div className="cards gap-x-4 gap-y-1 flex flex-wrap items-center">
            {cardsarr?.map(() => {
              return (
                <div className="cursor-pointer flex flex-col items-center p-2 w-28 h-auto hovergray rounded-md">
                  <div className="proimage rounded-full overflow-hidden w-18 h-18 ">
                    <img
                      src={proimg}
                      alt="profile-image"
                      className="rounded-full h-auto object-cover object-center"
                    />
                  </div>
                  <h3 className="text-xs mt-2 text-center">
                    ali_husnain husnain
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="flex items-center justify-between w-full h-[21%] px-2 overflow-y-hidden overflow-x-scroll">
        {cardsarr.map(() => {
          return (
            <div className="flex flex-col items-center w-[76px] p-2">
              <div className="proimage rounded-full overflow-hidden w-12 h-12 ">
                <img
                  src={proimg}
                  alt="profile-image"
                  className="rounded-full h-auto object-cover object-center"
                />
              </div>
              <h3 className="text-xs w-full mt-2 text-center">Copy link</h3>
            </div>
          );
        })}
      </div>
    </ShareModalPosition>
  );
};

export default ShareModal;
