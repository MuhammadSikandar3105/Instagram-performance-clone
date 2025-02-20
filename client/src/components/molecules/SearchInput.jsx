import React from "react";
import Input from "../atoms/Input";

const Search = ({ type, name }) => {
  return (
    <>
      <div className="search">
        <Input type={type} name={name} />
      </div>
    </>
  );
};
export default Search;
