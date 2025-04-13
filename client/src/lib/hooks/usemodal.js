import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, goPrevious, isModalOpen } from "../../store/slices/modalslice";
import { useLocation } from "react-router-dom";
import { closecreatemodal } from "../../store/slices/createmodalslice";
import { activeRoute } from "../../store/slices/activerouteslice";


const usemodal = () => {
    const { activemodal } = useSelector(state => state.modal)
    const { createmodal } = useSelector(state => state.createModal)
    const dispatch = useDispatch()
    const location = useLocation()

    // for open modal call this func and that update the state
    const openmodal = useCallback(
        (modalName, buttonRef) => {
            if (buttonRef?.current) {
                const rect = buttonRef.current.getBoundingClientRect();
                const position = {
                    top: rect.top,
                    left: rect.left,
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
    const closecreate = useCallback(() => {
        if (createmodal !== null) {
            dispatch(closecreatemodal())
            dispatch(activeRoute(location.pathname.split('/')[1] || '/'))
        }
    }, [dispatch, createmodal])

    return { openmodal, goback, closemodal, closecreate };
};

export default usemodal
