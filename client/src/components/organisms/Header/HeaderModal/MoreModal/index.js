import React from "react";
import { darktheme2 } from "../../../../../store/slices/themeslice";
import MoreItems from "./MoreItems";
import MoreModal from "./MoreModal";
const MoreModalItem = React.lazy(() => import("../../../../atoms/MoreModalItem"));
const MoreModalPosition = React.lazy(() => import("./MoreModalPosition"));
import { FiSettings, FiChevronLeft, FiActivity, FiSun, FiSave, FiMoon } from "react-icons/fi";
import { TbFileReport } from "react-icons/tb";
// import { FiChevronLeft  } from "react-icons/fa";

export { MoreModalItem, darktheme2, MoreModalPosition, MoreModal, MoreItems, FiSun, FiChevronLeft, FiSettings, FiActivity, FiSave, FiMoon, TbFileReport }