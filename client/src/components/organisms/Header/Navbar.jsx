import React from "react";
import { Button } from "./index";
import NavLogo from "./NavLogo";

const Navbar = () => {
  return (
    <header
      className={`bg-transparent text-inherit leading-none p-[30px] z-10 absolute top-0 left-0 w-full`}
    >
      <nav className=" flex justify-between items-center">
        <NavLogo />
        <div className="btns flex items-center justify-center gap-3">
          <Button name="About Us" to="/about" classes="bg-transparent" />
          <Button name="Speak to an Expert" to="/contact" classes="border" />
          <div className="border-1 border-gray-500 h-8"></div>
          <Button to="/login" name="Login" />
          <Button to="/signup" name="Sign Up" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
