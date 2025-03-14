import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { activeRoute } from "./index";

const Button = React.memo(({ name, to, classes }) => {
  const dispatch = useDispatch();

  const handleclick = () => {
    const route = to.split("/")[1].toLowerCase();
    dispatch(activeRoute(route));
  };
  return (
    <NavLink
      to={to}
      className={`${
        classes ? classes : "bg-btn text-primary"
      }  rounded-md py-[14px] px-5`}
      onClick={handleclick}
    >
      {name}
    </NavLink>
  );
});

export default Button;
