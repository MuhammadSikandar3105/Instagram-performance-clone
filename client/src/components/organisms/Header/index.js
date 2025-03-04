import React from "react";

// redux imports
import { darktheme2 } from "../../../../src/store/slices/themeslice.js";
// Chiled Components
const MoreModal = React.lazy(() => import("./HeaderModal/MoreModal/MoreModal.jsx"))
const ApearenceModal = React.lazy(() => import("./HeaderModal/MoreModal/ApearenceModal.jsx"))
const SeachModal = React.lazy(() => import("./HeaderModal/SearchModal/SearchModal.jsx"))
const NotifiModal = React.lazy(() => import("./HeaderModal/NotifiModal/Notifi.jsx"))
const CreateModal = React.lazy(() => import("./HeaderModal/CreateModal/CreateModal.jsx"))
const Modal = React.lazy(() => import("../../../components/molecules/Modal/Modal.jsx"));
// custom hooks
import useWidth from "../../../lib/hooks/useWidth.js";
// constants
import { flex } from '../../../lib/constants/constant.js'
import List from "../../molecules/List";
import Navlogo from "./Navlogo.jsx";
import { Home, Search, Explore, Reels, Message, Notification, Create, Profile, Threads, Hamberger } from './NavbarItems.jsx'
// Icons components
import Logo from "../../../assets/svg/NavbarIcons/Logo.jsx";
import RoutesIcons, { ThreadsIcon } from "../../../assets/svg/NavbarIcons/RoutesIcons.jsx";
// all exports
export { Notification, ThreadsIcon, NotifiModal, CreateModal, Home, Explore, Reels, Message, Create, Profile, Threads, List, Logo, useWidth, Search, MoreModal, ApearenceModal, SeachModal, Modal, flex, Navlogo, Hamberger, darktheme2, RoutesIcons };

