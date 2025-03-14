import React from "react";
import { NavLink } from "react-router-dom";
import { activeRoute, logo } from "./index";
import { useDispatch } from "react-redux";

const NavLogo = () => {
  const dispatch = useDispatch();
  return (
    <NavLink
      to="/"
      className="flex gap-2 items-center justify-center"
      onClick={() => dispatch(activeRoute("/"))}
    >
      <img src={logo} alt="llc logo" />
      <div className="flex flex-col text-[21px] font-bold">
        <span>Beyond</span>
        <span>Intelligence</span>
      </div>
    </NavLink>
  );
};

export default NavLogo;
