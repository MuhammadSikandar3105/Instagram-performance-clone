import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("./components/organisms/Header/Navbar"));
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Usescreensize from "../src/lib/hooks/Usescreensize";
import usemodal from "./lib/hooks/usemodal";

function App() {
  const { closemodal, closecreate } = usemodal();
  const darktheme = useSelector((state) => state.theme.darktheme);
  const { createmodal } = useSelector((state) => state.createModal);
  Usescreensize();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        !createmodal && closemodal();
        createmodal && closecreate();
      }}
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
