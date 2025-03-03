import React from "react";
import { List, RoutesIcons } from "./index";

const Home = () => {
  return (
    <List
      Icon={<RoutesIcons isActive={true} name="Home" />}
      spanid="home"
      to="/"
      spanname="Home"
    />
  );
};

const Search = ({ openmodal }) => {
  return (
    <List
      Icon={<RoutesIcons isActive={false} name="Search" />}
      spanid="search"
      spanname="Search"
      handleModal={openmodal}
    />
  );
};

const Explore = () => {
  return (
    <List
      Icon={<RoutesIcons isActive={false} name="Explore" />}
      spanid="explore"
      spanname="Explore"
      to="/explore"
    />
  );
};

const Reels = () => {
  return (
    <List
      Icon={<RoutesIcons isActive={false} name="Reels" />}
      spanid="reels"
      spanname="Reels"
      to="/reels"
    />
  );
};

const Message = () => {
  return (
    <List
      Icon={<RoutesIcons isActive={false} name="Messages" />}
      spanid="message"
      spanname="Messages"
      to="/message"
    />
  );
};

const Notification = ({ openmodal }) => {
  return (
    <List
      Icon={<RoutesIcons isActive={false} name="Notifications" />}
      spanid="notifications"
      spanname="Notifications"
      handleModal={openmodal}
    />
  );
};

const Create = ({ openmodal }) => {
  return (
    <List
      Icon={<RoutesIcons isActive={false} name="Create" />}
      spanid="create"
      spanname="Create"
      handleModal={openmodal}
    />
  );
};

const Profile = () => {
  return (
    <List
      Icon={<RoutesIcons isActive={false} name="Profile" />}
      spanid="profile"
      spanname="Profile"
      to="/profile"
    />
  );
};

const Threads = () => {
  return (
    <List
      Icon={<RoutesIcons isActive={false} name="Threads" />}
      spanid="threads"
      spanname="Threads"
      to="/threads"
    />
  );
};

const Hamberger = ({ openmodal }) => {
  return (
    <List
      Icon={<RoutesIcons isActive={false} name="Menu" />}
      spanid="more"
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
