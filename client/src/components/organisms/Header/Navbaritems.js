import { FaRegBell, FaRegUser, FiPlusSquare, IoCameraReverseOutline, IoPaperPlaneOutline, MdOutlineExplore } from './index'
export default [
    { id: "explore", to: "/explore", Icon: MdOutlineExplore, label: "Explore" },
    { id: "reels", to: "/reels", Icon: IoCameraReverseOutline, label: "Reels" },
    { id: "message", to: "/message", Icon: IoPaperPlaneOutline, label: "Messages" },
    { id: "notifications", to: "/notifications", Icon: FaRegBell, label: "Notifications" },
    { id: "create", to: "/create", Icon: FiPlusSquare, label: "Create" },
    { id: "profile", to: "/profile", Icon: FaRegUser, label: "Profile" },
]