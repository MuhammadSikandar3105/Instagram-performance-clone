import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("./components/organisms/Header/Navbar"));
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Usescreensize from "../src/lib/hooks/Usescreensize";
import usemodal from "./lib/hooks/usemodal";
import { closediscard, isdiscardmodal } from "./Index";

function App() {
  const { closemodal, closecreate } = usemodal();
  const darktheme = useSelector((state) => state.theme.darktheme);
  const { createmodal, discardmodal } = useSelector(
    (state) => state.createModal
  );
  const { pic } = useSelector((state) => state.createForm);
  const dispatch = useDispatch();
  Usescreensize();

  const handleClick = (e) => {
    e.stopPropagation();
    !createmodal && closemodal();
    pic && createmodal && dispatch(isdiscardmodal({ modalname: "Discard" }));
    !pic && createmodal && closecreate();
    discardmodal && dispatch(closediscard());
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        darktheme && "darkmode"
      } text-secondary min-h-screen bg-primary`}
    >
      {/* //add simmer effect on this */}
      <Suspense fallback={<div className="text-2xl">Loading...</div>}>
        <Navbar />
      </Suspense>
      <Outlet />
    </div>
  );
}

export default App;
