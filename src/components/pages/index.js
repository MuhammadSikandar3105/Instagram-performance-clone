import React from "react";
import MainContent from "../templates/MainContent";
import picture from "../../assets/images/IMG_4307.jpg";
import { UtilityIcons24 } from "../../assets/svg/NavbarIcons/utilityIcons";
import RoutesIcons from "../../assets/svg/NavbarIcons/RoutesIcons";
import { Utilitity96 } from "../../assets/svg/NavbarIcons/utilityIcons";
import FriendsSugg from "../organisms/Main/Home/Suggestion/FriendsSugg";
import Posts from "../organisms/Main/Home/Posts/Posts";
import loaderimginsta from '../../assets/images/loader.webp'
import loaderimgmeta from '../../assets/images/loadermeta.webp'
import Footer from "../organisms/Footer/Footer";
const Saved = React.lazy(() => import('./Profileroutes/Saved'))
const Taged = React.lazy(() => import('./Profileroutes/Taged'))
import { usefilter } from "../../lib/hooks/usefilter";
import { useGetpostsQuery, useGetusersQuery } from "../../store/slices/apislice";
const Messages = React.lazy(() => import("../organisms/Main/Message/Messages"));

export { useGetpostsQuery, Messages, useGetusersQuery, MainContent, usefilter, Saved, Taged, Footer, loaderimginsta, loaderimgmeta, FriendsSugg, Posts, Utilitity96, picture, UtilityIcons24, RoutesIcons }