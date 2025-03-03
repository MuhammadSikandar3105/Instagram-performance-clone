import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { activeRoute, prevActiveRoute } from "./index";

const List = React.memo(({ to, spanid, Icon, spanname, handleModal }) => {
  const buttonRef = useRef(null);
  const { largescreen, laptop } = useSelector((state) => state.screen);
  const { active } = useSelector((state) => state.active);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (active !== spanname) {
      dispatch(prevActiveRoute(active));
    }
    dispatch(activeRoute(spanname));
    handleModal && handleModal(spanid, buttonRef);
  };

  return (
    <NavLink
      className={` p-3 w-full my-[2px] rounded-lg cursor-pointer hover ${
        active === spanname && handleModal && "border"
      }`}
      {...(to && to.trim() !== "" ? { to } : {})}
      onClick={handleClick}
      ref={buttonRef}
    >
      <div
        className={`nav-link navbar-item flex flex-row items-center gap-4 justify-start max-w-[100%] focus:outline-none focus:bg-transparent active`}
      >
        <div>{Icon}</div>
        {largescreen && !laptop && spanname && (
          <span
            className={`${
              active === spanname && "font-bold"
            } visited:font-extrabold visited:text-red-500`}
          >
            {spanname}
          </span>
        )}
      </div>
    </NavLink>
  );
});
export default List;
