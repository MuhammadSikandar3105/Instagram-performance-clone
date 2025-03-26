import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { islaptop, islarg } from "./index";

const SearchPosition = ({ children, navbarWidth }) => {
  const { activemodal } = useSelector((state) => state.modal);
  const darkTheme = useSelector((state) => state.theme.darktheme);
  const largescreen = useSelector((state) => state.screen.largescreen);
  const dispatch = useDispatch();
  // dispatch only when screensize is greater than 1280px
  useEffect(() => {
    if (largescreen) {
      dispatch(islaptop());
      return () => dispatch(islarg());
    }
  }, [activemodal]);

  return (
    <div
      className={`max-w-[397px] w-full h-full flex flex-col ${
        darkTheme && "darkmode"
      } h-[100vh] rounded-r-[16px] border-r-[1px] border-right rounded-br-[16px] searchmodalshadow bg-primary text-secondary absolute top-0`}
      style={{ left: navbarWidth }} // pass navbarwidht who extracted by custom hook
      onClick={(e) => e.stopPropagation()} // stop to propagate to outer modal
    >
      {children}
    </div>
  );
};

export default SearchPosition;
