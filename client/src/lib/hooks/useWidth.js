import { useEffect, useState } from "react";

// for check the navbar width to adjust the modal left margin
const useWidth = (navbarRef) => {
    const [Width, setWidth] = useState(0)
    useEffect(() => {
        const updateNavWidth = () => {
            if (navbarRef?.current) {
                setWidth(navbarRef.current.offsetWidth); // set the full width of passing element
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
