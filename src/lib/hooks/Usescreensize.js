import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { islaptop, islarg, ismobile, isipad, istablet } from "../../store/slices/screensizeslice"

const Usescreensize = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const screensize = () => {
            const width = window.innerWidth //get the innerwidth
            if (width < 640) dispatch(ismobile()) //for mobile
            else if (width >= 640 && width < 768) dispatch(isipad()) // ipad
            else if (width >= 768 && width < 992) dispatch(istablet()) // tablet
            else if (width >= 992 && width < 1280) dispatch(islaptop()) // laptop
            else dispatch(islarg()) // for lage secrren update the redux store
        }
        screensize()

        window.addEventListener('resize', screensize) //always call when window size change
        return () => window.removeEventListener('resize', screensize) // clear event listner
    }, [dispatch])
}

export default Usescreensize