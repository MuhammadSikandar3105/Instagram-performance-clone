import React from "react";
import { darktheme2 } from "../../../../../store/slices/themeslice";
import MoreItems from "./MoreItems";
import MoreModal from "./MoreModal";
const MoreModalItem = React.lazy(() => import("../../../../atoms/MoreModalItem"));
const MoreModalPosition = React.lazy(() => import("./MoreModalPosition"));
import MoreModalIcons, { Back } from "../../../../../assets/svg/NavbarIcons/MoreModalIcons";

export { MoreModalItem, Back, MoreModalIcons, darktheme2, MoreModalPosition, MoreModal, MoreItems }