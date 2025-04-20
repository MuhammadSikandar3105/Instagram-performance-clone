import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navbarwidth } from "../../store/slices/navbarwidthslice";

// for check the navbar width to adjust the modal left margin
const useWidth = (navbarRef) => {
    const { width } = useSelector(state => state.navWidth)
    const dispatch = useDispatch()
    useEffect(() => {
        const updateNavWidth = () => {
            if (navbarRef?.current) {
                dispatch(navbarwidth(navbarRef.current.offsetWidth))
            }
        };

        const observer = new ResizeObserver(updateNavWidth);

        if (navbarRef?.current) {
            observer.observe(navbarRef.current);
            updateNavWidth();
        }

        return () => observer.disconnect();
    }, [navbarRef?.current?.offsetWidth]);
    return { width }
}

export default useWidth
