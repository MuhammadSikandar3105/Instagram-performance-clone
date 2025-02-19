import React from "react";
import { CiSearch, List } from "./index";

const Search = ({ openmodal }) => {
  return (
    <List
      Icon={<CiSearch size="28" className="text-secondary" />}
      spanid="search"
      spanname="Search"
      handleModal={openmodal}
    />
  );
};

export default Search;
