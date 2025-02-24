import { useEffect, useState } from "react";

const useWidth = (navbarRef) => {
    const [Width, setWidth] = useState(0)
    useEffect(() => {
        const updateNavWidth = () => {
            if (navbarRef?.current) {
                setWidth(navbarRef.current.offsetWidth);
            }
        };

        const observer = new ResizeObserver(updateNavWidth);
        if (navbarRef?.current) {
            observer.observe(navbarRef.current);
        }
        updateNavWidth();

        return () => observer.disconnect();
    }, [navbarRef]);

    return { Width }
}

export default useWidth
