import React from "react";
const MoreOption = React.lazy(() => import('./PostMoreModal/MoreOption'))
const ShareModal = React.lazy(() => import("./postShareModal/ShareModal"))
import Input from "../atoms/Input";
import { activeRoute } from "../../store/slices/activerouteslice";
import { RoutesIcons } from "../organisms/Header";
import usemodal from "../../lib/hooks/usemodal";
const Modal = React.lazy(() => import("./Modal/Modal"));
import { UtilityIcons24 } from "../organisms/Header";
import ProInfoCard from "./ProInfoCard";
import Proimage from "../atoms/Proimage";
import Proname from "../atoms/Proname";
import proimg from '../../assets/images/IMG_4307.jpg'

export { Proimage, ShareModal, ProInfoCard, proimg, MoreOption, Proname, UtilityIcons24, Modal, usemodal, Input, RoutesIcons, activeRoute }