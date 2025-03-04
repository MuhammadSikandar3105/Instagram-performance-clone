import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, goPrevious, isModalOpen } from "../../store/slices/modalslice";
import { activeRoute } from "../../components/molecules";
import { useLocation } from "react-router-dom";


const usemodal = () => {
    const { activemodal } = useSelector(state => state.modal)
    // const { prevActive } = useSelector(state => state.active)
    const dispatch = useDispatch()
    const location = useLocation()

    // for open modal call this func and that update the state
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

    // to go back call this func to update state
    const goback = useCallback(() => {
        dispatch(goPrevious())
    }, [dispatch])

    // to close modal call this func
    const closemodal = useCallback(() => {
        if (activemodal !== null) {
            dispatch(closeModal())
            dispatch(activeRoute(location.pathname.split('/')[1] || '/'))
        }
    }, [dispatch, activemodal])

    return { openmodal, goback, closemodal };
};

export default usemodal
