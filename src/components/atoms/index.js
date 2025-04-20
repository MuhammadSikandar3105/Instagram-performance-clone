import React from "react";
const ProDetailModal = React.lazy(() => import('./Modal/ProDetailModal'));
import { Modal } from "../molecules/index";
import MoreModalIcons from "../../assets/svg/NavbarIcons/MoreModalIcons";
import { useProModal } from "../../lib/hooks/useProModal";

export { ProDetailModal, useProModal, Modal, MoreModalIcons }