import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { islaptop, islarg, ismobile, isipad, istablet } from "../../store/slices/screensizeslice"
import { useLocation } from "react-router-dom";

const Usescreensize = () => {
    const { pathname } = useLocation();
    const { active } = useSelector((state) => state.active);
    const dispatch = useDispatch()
    useEffect(() => {
        const screensize = () => {
            const path = pathname.split("/")[1]
            const width = window.innerWidth //get the innerwidth
            if (width < 640) dispatch(ismobile()) //for mobile
            else if (width >= 640 && width < 768) dispatch(isipad()) // ipad
            else if (width >= 768 && width < 992) dispatch(istablet()) // tablet
            else if (width >= 992 && width < 1280 || path === 'messages') dispatch(islaptop()) // laptop
            else dispatch(islarg()) // for lage secrren update the redux store
        }
        screensize()

        window.addEventListener('resize', screensize) //always call when window size change
        return () => window.removeEventListener('resize', screensize) // clear event listner
    }, [window.innerWidth, pathname])
}

export default Usescreensize