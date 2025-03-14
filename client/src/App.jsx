import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("./components/organisms/Header/Navbar"));
import { Outlet } from "react-router-dom";
import Usescreensize from "../src/lib/hooks/Usescreensize";
import { useSelector } from "react-redux";

function App() {
  const { active } = useSelector((state) => state.active);
  console.log(active);
  Usescreensize();
  return (
    <div
      className={`${
        active === "/" ? "text-primary" : "text-secondary"
      } font-inter min-h-screen bg-primary`}
    >
      <Suspense>
        <Navbar />
      </Suspense>
      <Outlet />
    </div>
  );
}

export default App;
