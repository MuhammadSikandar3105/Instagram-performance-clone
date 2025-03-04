import React from "react";
import { useSelector } from "react-redux";

const MainContent = ({ children }) => {
  const { width } = useSelector((state) => state.navWidth);
  return (
    <div className="" style={{ marginLeft: width }}>
      {children}
    </div>
  );
};

export default MainContent;
