import React, { Suspense, useRef, useState } from "react";
import {
  Create,
  CreateModal,
  Explore,
  Home,
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
  const [searchinput, setSearchinput] = useState(false);
  const { activemodal } = useSelector((state) => state.modal);

  const handleClick = (e) => {
    e.stopPropagation();
    setSearchinput(true);
    openmodal("Search", buttonRef);
  };

  return (
    <>
      <nav className="top-nav text-secondary bg-primary z-10 px-4 h-[60px] border-b bordertopnav flex items-center justify-between w-full fixed top-0 right-0">
        <Navlogo classes="ms-0" />
        <div className="sideNav w-full flex items-center justify-end gap-2">
          {searchinput && (
            <SearchInput classes={`mb-0 max-w-[300px]`} autoFocus={true} />
          )}
          <div className="notifi cursor-pointer">
            <RoutesIcons name="Notifications" />
          </div>
        </div>
      </nav>
      <div className="bottomNav border-t text-secondary bg-primary z-10 bordertopnav fixed bottom-0 right-0 w-full flex items-center justify-evenly">
        <Home />
        <Explore />
        <Reels />
        <Create openmodal={openmodal} />
        <Message />
        <Profile />
        {activemodal && (
          <Suspense>
            <Modal>
              {activemodal === "Search" && <SeachModal navbarWidth={"20px"} />}
              {activemodal === "Create" && <CreateModal />}
            </Modal>
          </Suspense>
        )}
      </div>
    </>
  );
};

export default MobileNav;
