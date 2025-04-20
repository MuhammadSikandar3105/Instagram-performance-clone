import React, { Suspense, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  MobileNav,
  iscreatemodal,
  usemodal,
} from "./index.js";

const Navbar = () => {
  const { openmodal, goback } = usemodal(); // custom hook to update modalSlice
  const { activemodal } = useSelector((state) => state.modal);
  const { createmodal } = useSelector((state) => state.createModal);
  const { largescreen, ipad, mobile } = useSelector((state) => state.screen);
  const navbarRef = useRef(null);
  const dispatch = useDispatch();
  const { width } = useWidth(navbarRef); // custom hook to check ele width
  const modalhandleClick = (modalName) => {
    dispatch(iscreatemodal({ modalName }));
  };

  return (
    <>
      {ipad || mobile ? (
        <MobileNav />
      ) : (
        <section
          onClick={(e) => !createmodal && e.stopPropagation()}
          className={`fixed ${flex} w-[${width}px] h-[100vh] shrink-0 grow-0 font-normal`}
        >
          <nav
            ref={navbarRef}
            id="navbar-sec"
            className={`navbar-sec px-3 relative pb-5 pt-2 ${flex} h-full ${
              largescreen ? "w-[244px]" : "w-fit"
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
              <Create openmodal={modalhandleClick} />
              <Profile />
            </ul>
            <ul className="w-full flex flex-col justify-center gap-1 content-start">
              <Threads />
              <Hamberger openmodal={openmodal} />
              {activemodal && (
                <Suspense>
                  <Modal>
                    {activemodal === "More" && (
                      <MoreModal openmodal={openmodal} />
                    )}
                    {activemodal === "Appearence" && (
                      <ApearenceModal goback={goback} />
                    )}
                    {activemodal === "Search" && (
                      <SeachModal navbarWidth={width} />
                    )}
                    {activemodal === "Notifications" && (
                      <NotifiModal navbarWidth={width} />
                    )}
                  </Modal>
                </Suspense>
              )}
              {createmodal && (
                <Suspense>
                  <Modal>
                    {createmodal === "Create" && (
                      <Suspense>
                        <CreateModal />
                      </Suspense>
                    )}
                  </Modal>
                </Suspense>
              )}
            </ul>
          </nav>
        </section>
      )}
    </>
  );
};

export default Navbar;
