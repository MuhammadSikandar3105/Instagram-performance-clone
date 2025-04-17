import React from "react";

const Home = React.lazy(() => import("./components/pages/Home.jsx"));
const Explore = React.lazy(() => import("./components/pages/Explore.jsx"));
const Reels = React.lazy(() => import("./components/pages/Reels.jsx"));
const Message = React.lazy(() => import("./components/pages/Message.jsx"));
const Profile = React.lazy(() => import("./components/pages/Profile.jsx"));
const Postview = React.lazy(() => import("./components/organisms/Main/Home/Posts/Postview.jsx"));
import Loader from "./components/pages/Loader";
import Usescreensize from "../src/lib/hooks/Usescreensize";
import usemodal from "./lib/hooks/usemodal";

export { Home, Postview, Usescreensize, usemodal, Loader, Explore, Reels, Message, Profile };