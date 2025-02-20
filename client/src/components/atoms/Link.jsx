import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Link = React.memo(
  ({
    linkclasses,
    imgid,
    Icon,
    imgclasses,
    image,
    style,
    handleclick,
    to,
    logospan,
    listspan,
    spanclasses,
    spanname,
    ...props
  }) => {
    const { largescreen, laptop } = useSelector((state) => state.screen);
    return (
      <NavLink
        className={
          linkclasses
            ? linkclasses
            : `nav-link  navbar-item flex w-fit flex-row items-center gap-5 justify-start rounded-[10px] max-w-[90%] focus:outline-none focus:bg-transparent   active`
        }
        to={to}
        {...props}
      >
        {logospan && (
          <span
            id={logospan}
            className={
              spanclasses
                ? spanclasses
                : `visited:font-extrabold visited:text-red-500`
            }
          >
            {spanname}
          </span>
        )}
        <div
          id={imgid}
          className={imgclasses}
          onClick={handleclick}
          style={style}
        >
          {Icon}
        </div>
        {largescreen && !laptop && listspan && (
          <span
            id={listspan}
            className={`visited:font-extrabold visited:text-red-500`}
          >
            {spanname}
          </span>
        )}
      </NavLink>
    );
  }
);

export default Link;
