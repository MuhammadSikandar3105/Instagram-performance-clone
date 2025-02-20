import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { islaptop, islarg } from "./index";

const SearchPosition = ({ children, navbarWidth }) => {
  const { activemodal } = useSelector((state) => state.modal);
  const darkTheme = useSelector((state) => state.theme.darktheme);
  const largescreen = useSelector((state) => state.screen.largescreen);
  const dispatch = useDispatch();
  useEffect(() => {
    if (largescreen) {
      dispatch(islaptop());
    }
    return () => dispatch(islarg());
  }, [activemodal]);

  return (
    <div
      className={`w-[397px] ${
        darkTheme && "darkmode"
      } pt-2 h-[100vh] rounded-r-[16px] border-r-[1px] border-right rounded-br-[16px] searchmodalshadow bg-primary text-secondary absolute top-0`}
      style={{ left: navbarWidth }}
    >
      {children}
    </div>
  );
};

export default SearchPosition;
