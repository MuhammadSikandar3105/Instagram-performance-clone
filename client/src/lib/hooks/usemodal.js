import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, goPrevious, isModalOpen } from "../../store/slices/modalslice";
import { activeRoute } from "../../components/molecules";


const usemodal = () => {
    const { activemodal } = useSelector(state => state.modal)
    const { prevActive } = useSelector(state => state.active)
    const dispatch = useDispatch()

    const openmodal = useCallback(
        (modalName, buttonRef) => {
            if (buttonRef?.current) {
                const rect = buttonRef.current.getBoundingClientRect();
                const position = {
                    top: rect.top + window.scrollY,
                    left: rect.left + window.scrollX,
                    height: rect.height,
                    width: rect.width
                }
                dispatch(isModalOpen({ modalName, buttonRef: position }))
                return
            }
            dispatch(isModalOpen({ modalName }))
        },
        [dispatch]
    );

    const goback = useCallback(() => {
        dispatch(goPrevious())
    }, [dispatch])

    const closemodal = useCallback(() => {
        if (activemodal !== null) {
            dispatch(closeModal())
            dispatch(activeRoute(prevActive))
        }
    }, [dispatch, activemodal])

    return { openmodal, goback, closemodal };
};

export default usemodal
