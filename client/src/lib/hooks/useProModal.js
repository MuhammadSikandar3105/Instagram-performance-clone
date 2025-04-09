import { useRef, useState } from "react";

export const useProModal = (imageRef) => {
    const [ismodal, setIsmodal] = useState(false);
    const timeoutRef = useRef(null);
    const [position, setPosition] = useState({
        left: "0",
        top: "0",
        bottom: "0",
    });
    const handleMouseEnter = () => {
        clearTimeout(timeoutRef?.current);
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            setPosition({
                left: rect.left,
                top: rect.top + rect.height,
                bottom: rect.bottom - rect.height,
            });
        }
        setIsmodal(true);
    };
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsmodal(false);
        }, 150);
    };

    return [ismodal, position, handleMouseEnter, handleMouseLeave]
}