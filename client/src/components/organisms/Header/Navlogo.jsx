import React from "react";
import { useSelector } from "react-redux";
import { Logo, RoutesIcons } from "./index";
import { NavLink } from "react-router-dom";

const Navlogo = ({ classes }) => {
  const { largescreen, laptop, ipad } = useSelector((state) => state.screen);
  return (
    <NavLink
      className={`${
        classes
          ? classes
          : "navbar-brand w-full ms-0 pt-[32px] pb-4 px-3 mb-[12px]"
      }`}
      to="/"
    >
      {ipad ? (
        <Logo />
      ) : largescreen && !laptop ? (
        <Logo />
      ) : (
        <RoutesIcons name="Logo" />
      )}
    </NavLink>
  );
};

export default Navlogo;
