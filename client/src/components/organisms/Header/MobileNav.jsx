import React, { Suspense, useRef } from "react";
import {
  Create,
  CreateModal,
  Explore,
  Home,
  Input,
  Message,
  Modal,
  Navlogo,
  Profile,
  Reels,
  RoutesIcons,
  SeachModal,
  SearchInput,
  usemodal,
} from "./index";
import { useSelector } from "react-redux";

const MobileNav = () => {
  const { openmodal } = usemodal(); // custom hook to update modalSlice
  const buttonRef = useRef(null);
  const { activemodal } = useSelector((state) => state.modal);

  const handleClick = (e) => {
    e.stopPropagation();
    openmodal("Search", buttonRef);
  };

  return (
    <>
      <nav className="top-nav px-4 h-[60px] border-b bordertopnav flex items-center justify-between w-full fixed top-0 right-0">
        <Navlogo classes="ms-0" />
        <div className="sideNav w-full flex items-center justify-end gap-2">
          {activemodal === "Search" ? (
            <SearchInput classes={`mb-0 max-w-[300px]`} autoFocus={true} />
          ) : (
            <div
              onClick={handleClick}
              ref={buttonRef}
              className="flex max-w-[300px] w-full items-center gap-2 h-[40px] px-3 py-3 bg-border rounded-[8px] border-[1px] inputborder"
            >
              <RoutesIcons name="Search" />
              <span className="text-[#808080] font-light">Search</span>
            </div>
          )}

          <RoutesIcons name="Notifications" />
        </div>
      </nav>
      <div className="bottomNav border-t bordertopnav fixed bottom-0 right-0 w-full flex items-center justify-evenly">
        <Home />
        <Explore />
        <Reels />
        <Create />
        <Message />
        <Profile />
        {/* {activemodal && (
          <Suspense>
            <Modal>
              {activemodal === "Search" && <SeachModal navbarWidth={"20px"} />}
              {activemodal === "Create" && <CreateModal />}
            </Modal>
          </Suspense>
        )} */}
      </div>
    </>
  );
};

export default MobileNav;
