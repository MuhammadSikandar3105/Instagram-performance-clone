import React from "react";

// redux imports
import { darktheme2 } from "../../../../src/store/slices/themeslice.js";


// Chiled Components
const MoreModal = React.lazy(() => import("./HeaderModal/MoreModal/MoreModal.jsx"))
const ApearenceModal = React.lazy(() => import("./HeaderModal/MoreModal/ApearenceModal.jsx"))
const SeachModal = React.lazy(() => import("./HeaderModal/SearchModal/SearchModal.jsx"))
const Modal = React.lazy(() => import("../../../components/molecules/Modal/Modal.jsx"));

// custom hooks
import useWidth from "../../../lib/hooks/useWidth.js";
// constants
import { flex } from '../../../lib/constants/constant.js'

import List from "../../molecules/List";
import Link from "../../atoms/Link";
import Logo from "../../../assets/svg/Logo.jsx";
import Navbaritems from "./Navbaritems.js";
import Navlogo from "./Navlogo.jsx";
import Hamberger from "./Hamberger.jsx";
import Search from "./Search.jsx";
// React Icons
import { FaCamera, FaInstagram, FaRegBell, FaRegUser } from "react-icons/fa";
import { MdHomeFilled, MdOutlineExplore } from "react-icons/md";
import { IoCameraReverseOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { TbAt } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

// all exports
export { Link, List, Logo, useWidth, Search, MoreModal, ApearenceModal, SeachModal, Modal, flex, Navlogo, Hamberger, Navbaritems, darktheme2, FaInstagram, FaCamera, FaRegUser, FaRegBell, TbAt, HiOutlineMenu, FiPlusSquare, IoPaperPlaneOutline, IoCameraReverseOutline, CiSearch, MdOutlineExplore, MdHomeFilled };

