import React from "react";
import Input from "../atoms/Input";
import { activeRoute } from "../../store/slices/activerouteslice";
import { RoutesIcons } from "../organisms/Header";
import usemodal from "../../lib/hooks/usemodal";
import proimg from '../../assets/images/IMG_4307.jpg'
const ProDetailModal = React.lazy(() => import('./Modal/ProDetailModal'));
import Modal from "./Modal/Modal";
import { UtilityIcons24 } from "../organisms/Header";

export { ProDetailModal, UtilityIcons24, Modal, proimg, usemodal, Input, RoutesIcons, activeRoute }