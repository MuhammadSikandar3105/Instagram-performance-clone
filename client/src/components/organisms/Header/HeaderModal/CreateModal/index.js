import React from "react";
import SearchInput from "../../../../molecules/SearchInput";
import CreatePosition from "./CreatePositon";
import { Gragphotos } from "../../../../../assets/svg/NavbarIcons/MoreModalIcons";
import { MoreModalIcons } from "../MoreModal";
import { RoutesIcons } from "../../../../molecules";
import { newdata } from "../../../../../store/slices/createFormslice";
import { Modal } from "../../index";
const DiscardModal = React.lazy(() => import('./DiscardModal'))
import CreateModalIcons from "../../../../../assets/svg/NavbarIcons/CreateModalIcons";
import SwitchButton from "../../../../molecules/SwitchButton";
import { useAddpostMutation } from "../../../../../store/slices/apislice";
import { useGetpostsQuery } from "../../../../../store/slices/apislice";
import loader from '../../../../../assets/svgs/instagramloader.gif'
import okimage from '../../../../../assets/svgs/instagramethankyou.gif'
import { usemodal } from "../../../../molecules";
import PostForm from "./PostForm";

export { SearchInput, usemodal, PostForm, loader, okimage, useGetpostsQuery, useAddpostMutation, CreateModalIcons, SwitchButton, Modal, DiscardModal, newdata, RoutesIcons, CreatePosition, Gragphotos, MoreModalIcons }