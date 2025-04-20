import React, { Suspense, useState } from "react";
import {
  HeaderModal,
  RoutesIcons,
  ShareLinks,
  ShareModalPosition,
  ShareProfileSec,
  ShareSearch,
} from "./index";

const ShareModal = ({ setShare }) => {
  const [isSelected, setIsSelected] = useState({ is: false, id: "" });
  const [isSearch, setIsSearch] = useState(false);
  const handleClick = () => {
    setShare(false);
  };
  return (
    <Suspense>
      <ShareModalPosition setShare={setShare}>
        <div className="w-full h-[22%]">
          <div className="px-4 pt-2">
            <Suspense>
              <HeaderModal
                name="Share"
                border={false}
                handleClick={handleClick}
              />
            </Suspense>
          </div>
          <div className="flex p-4 items-center w-full">
            <div className="flex items-center rounded-md bg-darkgray w-full">
              <div className="ml-4 lightGray">
                <RoutesIcons name="Search" size="16" />
              </div>
              <input
                onClick={() => {
                  setIsSearch(true);
                  setIsSelected(false);
                }}
                className="bg-transparent w-full p-2 text-secondary outline-0"
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
        {isSearch && !isSelected.is ? (
          <Suspense>
            <ShareSearch selected={setIsSelected} search={setIsSearch} />
          </Suspense>
        ) : (
          <Suspense>
            <ShareProfileSec selectedId={isSelected} />
          </Suspense>
        )}
        <Suspense>
          <ShareLinks selectedId={isSelected} />
        </Suspense>
      </ShareModalPosition>
    </Suspense>
  );
};

export default ShareModal;
