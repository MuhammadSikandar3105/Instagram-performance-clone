import React from "react";
import { darktheme2 } from "../../../../../store/slices/themeslice";
import MoreItems from "./MoreItems";
import MoreModal from "./MoreModal";
const MoreModalItem = React.lazy(() => import("../../../../atoms/MoreModalItem"));
const MoreModalPosition = React.lazy(() => import("./MoreModalPosition"));
import MoreModalIcons from "../../../../../assets/svg/NavbarIcons/MoreModalIcons";
import SwitchButton from "../../../../molecules/SwitchButton";

export { MoreModalItem, SwitchButton, MoreModalIcons, darktheme2, MoreModalPosition, MoreModal, MoreItems }