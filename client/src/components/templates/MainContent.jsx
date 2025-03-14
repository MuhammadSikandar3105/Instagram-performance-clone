import React from "react";
import { useSelector } from "react-redux";

const MainContent = ({ children }) => {
  const {} = useSelector((state) => state.screen);

  return <div className="">{children}</div>;
};

export default MainContent;
