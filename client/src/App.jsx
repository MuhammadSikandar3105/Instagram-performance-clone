import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("./components/organisms/Header/Navbar"));
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Usescreensize from "../src/lib/hooks/Usescreensize";
import usemodal from "./lib/hooks/usemodal";

function App() {
  const { closemodal } = usemodal();
  const darktheme = useSelector((state) => state.theme.darktheme);
  Usescreensize();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        closemodal();
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
