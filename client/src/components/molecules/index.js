import React from "react";
const MoreOption = React.lazy(() => import('./PostMoreModal/MoreOption'))
import Input from "../atoms/Input";
import { activeRoute } from "../../store/slices/activerouteslice";
import { RoutesIcons } from "../organisms/Header";
import usemodal from "../../lib/hooks/usemodal";
import Modal from "./Modal/Modal";
import { UtilityIcons24 } from "../organisms/Header";
import Proimage from "../atoms/Proimage";
import Proname from "../atoms/Proname";
import proimg from '../../assets/images/IMG_4307.jpg'

export { Proimage, proimg, MoreOption, Proname, UtilityIcons24, Modal, usemodal, Input, RoutesIcons, activeRoute }