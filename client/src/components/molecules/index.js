import React from "react";
import Input from "../atoms/Input";
import { Cross } from "../../assets/svg/NavbarIcons/MoreModalIcons";
import { activeRoute } from "../../store/slices/activerouteslice";
import { RoutesIcons } from "../organisms/Header";
import usemodal from "../../lib/hooks/usemodal";
import proimg from '../../assets/svgs/IMG_4307.jpg'
const ProDetailModal = React.lazy(() => import('./Modal/ProDetailModal'));
import Modal from "./Modal/Modal";

export { Cross, ProDetailModal, Modal, proimg, usemodal, Input, RoutesIcons, activeRoute }