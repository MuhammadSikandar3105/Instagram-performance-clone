import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const MoreModalPosition = ({ children }) => {
  const darkTheme = useSelector((state) => state.theme.darktheme);
  const screensize = useSelector((state) => state.screen);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const modalref = useRef(null); // to get modal height for possition
  const buttonref = useSelector((state) => state.modal.buttonRef); // left, top values
  const updatePosition = useCallback(() => {
    if (buttonref) {
      // if screen is greater than 1280
      let newtop = buttonref.top - modalref?.current?.offsetHeight;
      let newleft = buttonref.left;
      // if screen is less than 1280
      if (!screensize.largescreen) {
        newtop += buttonref.height;
        newleft += buttonref.width;
      }
      // to check if the position is changed then change only
      setPosition((prev) => {
        if (prev.top !== newtop || prev.left !== newleft) {
          return { top: newtop, left: newleft };
        }
        return prev;
      });
    }
  }, [buttonref, screensize, modalref]); //update when screensize, modalref, buttonref chacnges

  // use uselayouteffect beacause i want make changes before painting on ui
  useLayoutEffect(() => {
    const observer = new ResizeObserver(updatePosition);
    if (modalref.current) observer.observe(modalref.current);

    return () => observer.disconnect(); // for disconnect on unmounting
  }, [updatePosition]); // whenever update position change it's run and paint the screen

  // uselayouteffect for before painting the ui
  useLayoutEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [updatePosition]);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      ref={modalref}
      className={`modalbg bg-border text-secondary w-full modalshadow absolute rounded-[16px] p-2 h-auto max-w-[266px] ${
        darkTheme && "darkmode"
      }`}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {children}
    </div>
  );
};

export default MoreModalPosition;
