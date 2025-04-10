import React from 'react';
import proimg from '../../../../../assets/images/IMG_4307.jpg'
import thankyou from '../../../../../assets/images/instagramethankyou.gif'
import { UtilityIcons24 } from "../../../../../assets/svg/NavbarIcons/utilityIcons";
import { Liked } from "../../../../../assets/svg/NavbarIcons/utilityIcons";
import Postcard from "./Postcard";
import Proimage from "../../../../molecules/Proimage";
import Proname from "../../../../molecules/Proname";
const MoreOption = React.lazy(() => import('./PostModal/MoreOption'))
import Modal from "../../../../molecules/Modal/Modal";

export { proimg, Modal, MoreOption, Proimage, Proname, thankyou, Postcard, UtilityIcons24, Liked }