import React from "react";
import { List, ProfileIcon, RoutesIcons, ThreadsIcon } from "./index";

const Home = () => {
  return <List Icon={<RoutesIcons name="/" />} to="/" spanname="Home" />;
};

// in modals like search, notifications, and menu pass name capital S beacause in list passed spanname for active
const Search = ({ openmodal }) => {
  return (
    <List
      Icon={<RoutesIcons name="Search" />}
      spanname="Search"
      handleModal={openmodal}
    />
  );
};

const Explore = () => {
  return (
    <List
      Icon={<RoutesIcons name="explore" />}
      spanname="Explore"
      to="/explore"
    />
  );
};

const Reels = () => {
  return (
    <List Icon={<RoutesIcons name="reels" />} spanname="Reels" to="/reels" />
  );
};

const Message = () => {
  return (
    <List
      Icon={<RoutesIcons name="message" />}
      spanname="Messages"
      to="/message"
    />
  );
};

const Notification = ({ openmodal }) => {
  return (
    <List
      Icon={<RoutesIcons name="Notifications" />}
      spanname="Notifications"
      handleModal={openmodal}
    />
  );
};

const Create = ({ openmodal }) => {
  return (
    <List
      Icon={<RoutesIcons name="Create" />}
      spanname="Create"
      handleModal={openmodal}
    />
  );
};

const Profile = () => {
  return (
    <List
      Icon={<ProfileIcon name="profile" />}
      spanname="Profile"
      to="/profile"
    />
  );
};

const Threads = () => {
  return <List Icon={<ThreadsIcon />} spanid="threads" spanname="Threads" />;
};

const Hamberger = ({ openmodal }) => {
  return (
    <List
      Icon={<RoutesIcons name="Menu" />}
      spanname="More"
      handleModal={openmodal}
    />
  );
};

export {
  Home,
  Search,
  Explore,
  Reels,
  Message,
  Notification,
  Create,
  Profile,
  Threads,
  Hamberger,
};
