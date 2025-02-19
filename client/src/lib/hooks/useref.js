import { useCallback, useRef } from "react"

const useref = () => {
    const buttonRef = useRef(null)

    const setButtonRef = useCallback((element) => {
        if (element) buttonRef.current = element;
    }, [])

    return [buttonRef, setButtonRef]
}

export default useref
