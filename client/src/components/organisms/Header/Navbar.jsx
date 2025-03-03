import React, { Suspense, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Navlogo,
  Hamberger,
  flex,
  Modal,
  MoreModal,
  ApearenceModal,
  Search,
  SeachModal,
  useWidth,
  Notification,
  Threads,
  Home,
  Explore,
  Reels,
  Message,
  Create,
  Profile,
  NotifiModal,
  CreateModal,
} from "./index.js";
import usemodal from "../../../lib/hooks/usemodal.js";

const Navbar = () => {
  const { openmodal, goback } = usemodal();
  const { activemodal } = useSelector((state) => state.modal);
  const { largescreen } = useSelector((state) => state.screen);
  const navbarRef = useRef(null);
  const { Width } = useWidth(navbarRef);

  return (
    <section
      className={`fixed ${flex} w-[244px] h-[100vh] shrink-0 grow-0 font-normal`}
    >
      <nav
        ref={navbarRef}
        id="navbar-sec"
        className={`navbar-sec px-3 relative pb-5 pt-2 ${flex} h-full ${
          largescreen ? "w-full" : "w-fit"
        }  justify-between border border-r-[1px]
          navbar-expand bg-body-dark`}
        data-bs-theme="dark"
      >
        <ul className={`w-full ${flex} justify-center gap-1 content-start`}>
          <Navlogo />
          <Home />
          <Search openmodal={openmodal} />
          <Explore />
          <Reels />
          <Message />
          <Notification openmodal={openmodal} />
          <Create openmodal={openmodal} />
          <Profile />
        </ul>
        <ul className="w-full flex flex-col justify-center gap-1 content-start">
          <Threads />
          <Hamberger openmodal={openmodal} />
          {activemodal && (
            <Suspense>
              <Modal>
                {activemodal === "more" && <MoreModal openmodal={openmodal} />}
                {activemodal === "appearence" && (
                  <ApearenceModal goback={goback} />
                )}
                {activemodal === "search" && <SeachModal navbarWidth={Width} />}
                {activemodal === "notifications" && (
                  <NotifiModal navbarWidth={Width} />
                )}
                {activemodal === "create" && <CreateModal />}
              </Modal>
            </Suspense>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
