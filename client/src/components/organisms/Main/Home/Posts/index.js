import React from 'react';
import proimg from '../../../../../assets/images/IMG_4307.jpg'
import thankyou from '../../../../../assets/images/instagramethankyou.gif'
import { UtilityIcons24 } from "../../../../../assets/svg/NavbarIcons/utilityIcons";
import { Liked } from "../../../../../assets/svg/NavbarIcons/utilityIcons";
import Postcard from "./Postcard";
import Proimage from "../../../../atoms/Proimage";
import Proname from "../../../../atoms/Proname";
const MoreOption = React.lazy(() => import('./PostModal/MoreOption'))
import Modal from "../../../../molecules/Modal/Modal";
import ProInfoCard from "../../../../molecules/ProInfoCard";

export { proimg, Modal, ProInfoCard, MoreOption, Proimage, Proname, thankyou, Postcard, UtilityIcons24, Liked }