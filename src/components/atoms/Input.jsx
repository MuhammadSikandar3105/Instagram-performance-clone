import React from "react";

const Input = ({ type, name, classes, autoFocus }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        {...(autoFocus ? { autoFocus } : {})}
        className={`${classes} placeholder:font-extralight`}
        placeholder="Search"
      />
    </>
  );
};

export default Input;
