import React from "react";
import { darktheme2 } from "../../../../../store/slices/themeslice";
const MoreItems = React.lazy(() => import("./MoreItems"))
const MoreModalItem = React.lazy(() => import("../../../../atoms/MoreModalItem"));
const MoreModalPosition = React.lazy(() => import("./MoreModalPosition"));
import MoreModalIcons from "../../../../../assets/svg/NavbarIcons/MoreModalIcons";
const SwitchButton = React.lazy(() => import("../../../../molecules/SwitchButton"))

export { MoreModalItem, SwitchButton, MoreModalIcons, darktheme2, MoreModalPosition, MoreItems }