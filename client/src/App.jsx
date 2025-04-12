import React, { Suspense } from "react";
const Navbar = React.lazy(() => import("./components/organisms/Header/Navbar"));
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Loader, usemodal, Usescreensize } from "./Index";

function App() {
  const darktheme = useSelector((state) => state.theme.darktheme);
  const { createmodal } = useSelector((state) => state.createModal);
  const { closemodal } = usemodal();
  Usescreensize();

  const handleClick = (e) => {
    e.stopPropagation();
    !createmodal && closemodal();
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        darktheme && "darkmode"
      } text-secondary min-h-screen bg-primary`}
    >
      {/* //add simmer effect on this */}
      <Suspense fallback={<Loader />}>
        <Navbar />
      </Suspense>
      <Outlet />
    </div>
  );
}

export default App;
