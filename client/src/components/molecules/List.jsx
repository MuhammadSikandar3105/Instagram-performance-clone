import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { activeRoute } from "./index";

const List = React.memo(({ to, Icon, spanname, handleModal }) => {
  const buttonRef = useRef(null);
  const { largescreen, laptop, ipad, mobile } = useSelector(
    (state) => state.screen
  );
  const { active } = useSelector((state) => state.active);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleClick = (e) => {
    // if modal user want to open modal then not change route
    if (handleModal) {
      e.preventDefault();
      dispatch(activeRoute(spanname));
    }
    handleModal && handleModal(spanname, buttonRef);
  };
  // when pathname change then update acitveroute
  useEffect(() => {
    dispatch(activeRoute(pathname.split("/")[1] || "/")); //add '/' for home route
  }, [pathname]);

  return (
    <NavLink
      className={`p-3 w-full my-[2px] rounded-lg cursor-pointer hover ${
        active === spanname && handleModal && "border"
      }`}
      {...(to && to.trim() !== "" ? { to } : {})}
      onClick={handleClick}
      ref={buttonRef}
    >
      <div
        className={`nav-link navbar-item flex flex-row items-center gap-4 ${
          ipad || mobile ? "justify-center" : "justify-start"
        } max-w-[100%] focus:outline-none focus:bg-transparent active`}
      >
        <div>{Icon}</div>
        {largescreen && !laptop && spanname && (
          <span
            className={`${
              (active.toLowerCase() === spanname.toLowerCase() &&
                "font-bold") ||
              (active === to && "font-bold")
            }`}
          >
            {spanname}
          </span>
        )}
      </div>
    </NavLink>
  );
});
export default List;
