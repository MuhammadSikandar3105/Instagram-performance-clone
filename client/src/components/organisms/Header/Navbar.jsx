import React, { Suspense, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  List,
  TbAt,
  Navbaritems,
  Navlogo,
  Hamberger,
  flex,
  Modal,
  MoreModal,
  ApearenceModal,
  MdHomeFilled,
  Search,
  SeachModal,
} from "./index.js";
import usemodal from "../../../lib/hooks/usemodal.js";

const Navbar = () => {
  const { openmodal, goback } = usemodal();
  const [navbarWidth, setNavbarWidth] = useState(0);
  const { activemodal } = useSelector((state) => state.modal);
  const navbarRef = useRef(null);

  useEffect(() => {
    const updateNavWidth = () => {
      if (navbarRef.current) {
        setNavbarWidth(navbarRef.current.offsetWidth);
      }
    };

    const observer = new ResizeObserver(updateNavWidth);
    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }
    updateNavWidth();

    return () => observer.disconnect();
  }, []);
  return (
    <section className={`fixed ${flex} w-fit shrink-0 grow-0`}>
      <nav
        ref={navbarRef}
        id="navbar-sec"
        className={`navbar-sec px-3 relative pb-5 pt-2 ${flex} h-[100vh] justify-between max-w-[284px] w-full border border-r-[1px]  navbar-expand bg-body-dark`}
        data-bs-theme="dark"
      >
        <ul className={`w-full ${flex} justify-center gap-1 content-start`}>
          {/* Logo */}
          <Navlogo />
          {/* Home */}
          <List
            Icon={<MdHomeFilled size="28" className="text-secondary" />}
            to="/home"
            spanid="home"
            spanname="Home"
          />
          {/* Search */}
          <Search openmodal={openmodal} />
          {/* Routes */}
          {Navbaritems?.map(({ to, id, label, Icon }) => (
            <List
              key={id}
              Icon={<Icon size="28" className="text-secondary" />}
              to={to}
              spanid={id}
              spanname={label}
            />
          ))}
        </ul>
        {/* Others */}
        <ul className="navbar-nav d-flex flex-col nav-main justify-start">
          {/* Threads */}
          <List
            Icon={<TbAt size="28" className="text-secondary" />}
            to=""
            spanid="threads"
            spanname="Threads"
          />
          <Hamberger openmodal={openmodal} />
          {activemodal && (
            <Suspense>
              <Modal>
                {activemodal === "more" && <MoreModal openmodal={openmodal} />}
                {activemodal === "appearence" && (
                  <ApearenceModal goback={goback} />
                )}
                {activemodal === "search" && (
                  <SeachModal navbarWidth={navbarWidth} />
                )}
              </Modal>
            </Suspense>
          )}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
