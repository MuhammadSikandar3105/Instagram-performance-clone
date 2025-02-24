import React from "react";

const Input = ({ type, name, classes }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className={`${classes} placeholder:font-extralight`}
        placeholder="Search"
      />
    </>
  );
};

export default Input;
