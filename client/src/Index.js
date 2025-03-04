import React from "react";

const Home = React.lazy(() => import("./components/pages/Home.jsx"));
const Explore = React.lazy(() => import("./components/pages/Explore.jsx"));
const Reels = React.lazy(() => import("./components/pages/Reels.jsx"));
const Message = React.lazy(() => import("./components/pages/Message.jsx"));
const Profile = React.lazy(() => import("./components/pages/Profile.jsx"));
const Threads = React.lazy(() => import("./components/pages/Threads.jsx"));

export { Home, Explore, Reels, Message, Profile, Threads };