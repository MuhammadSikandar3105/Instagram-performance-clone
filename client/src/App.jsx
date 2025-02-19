import { Outlet } from "react-router-dom";
import Navbar from "./components/organisms/Header/Navbar";
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
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
