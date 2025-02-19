import React from "react";
import { useSelector } from "react-redux";
import { FaInstagram, Link, Logo } from "./index";

const Navlogo = () => {
  const darktheme = useSelector((state) => state.theme.darktheme);
  const { islarg } = useSelector((state) => state.screen);
  return (
    <Link
      linkclasses="navbar-brand w-full ms-0 pt-6 pb-4 px-3 mb-4"
      to="/"
      logospan="insta-name"
      spanclasses="insta-name"
      // image={instalogo}
      Icon={
        islarg ? (
          <Logo color={`${darktheme ? "white" : "black"}`} />
        ) : (
          <FaInstagram size="28" color={`${darktheme ? "white" : "black"}`} />
        )
      }
    />
  );
};

export default Navlogo;
