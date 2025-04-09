import React from "react";
import { useSelector } from "react-redux";

const MainContent = ({ children }) => {
  const { width } = useSelector((state) => state.navWidth);
  const { ipad, mobile, largescreen, laptop } = useSelector(
    (state) => state.screen
  );
  return (
    <div
      className=""
      style={
        ipad || mobile
          ? { marginTop: "60px", padding: "0 4px" }
          : { marginLeft: width }
      }
    >
      {children}
    </div>
  );
};

export default MainContent;
