import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { islaptop, islarg, ismobile, isipad, istablet } from "../../store/slices/screensizeslice"

const Usescreensize = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const screensize = () => {
            const width = window.innerWidth
            if (width < 640) dispatch(ismobile())
            else if (width >= 640 && width < 768) dispatch(isipad())
            else if (width >= 768 && width < 992) dispatch(istablet())
            else if (width >= 992 && width < 1280) dispatch(islaptop())
            else dispatch(islarg())
        }
        screensize()

        window.addEventListener('resize', screensize)
        return () => window.removeEventListener('resize', screensize)
    }, [dispatch])
}

export default Usescreensize