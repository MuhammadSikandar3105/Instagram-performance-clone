import React from "react";
const ShareModalPosition = React.lazy(() => import("./ShareModalPosition"))
const HeaderModal = React.lazy(() => import("../../atoms/HeaderModal"))
const ShareSearch = React.lazy(() => import("./ShareSearch"))
const ShareProfileSec = React.lazy(() => import("./ShareProfileSec"))
const ShareLinks = React.lazy(() => import("./ShareLinks"))
const ShareCard = React.lazy(() => import("./atoms/ShareCard"))
import RoutesIcons from "../../../assets/svg/NavbarIcons/RoutesIcons";
import ProInfoCard from "../ProInfoCard";
import proimg from "../../../assets/images/IMG_4307.jpg";

export { ShareModalPosition, ShareSearch, ShareCard, ShareProfileSec, ShareLinks, proimg, ProInfoCard, HeaderModal, RoutesIcons }