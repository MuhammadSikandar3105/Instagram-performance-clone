import React from "react";
import { newdata } from "./index";
import { useDispatch } from "react-redux";

const DiscardModal = ({ setDiscard }) => {
  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(newdata({ pic: null }));
    setDiscard(false);
  };
  const cancelclick = () => {
    setDiscard(false);
  };

  return (
    <div
      className="bg-[#00000076] w-full h-full absolute top-1/2 -translate-y-1/2"
      onClick={cancelclick}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modalbg text-secondary rounded-[12px] w-[400px] overflow-hidden h-[200px] absolute top-1/2 left-1/2 -translate-1/2 "
      >
        <div className="w-full h-full flex justify-end flex-col">
          <div className="topsection w-full flex flex-col justify-center text-center">
            <h2 className="text-xl ">Discard Post?</h2>
            <p className="text-[#A8A8A8] pt-2 ">
              If you leave, your edits won't be saved.
            </p>
          </div>
          <div className="bottom-section text-sm mt-5 w-full flex flex-col justify-center items-center text-center">
            <button
              onClick={handleclick}
              className="w-full min-h-[48px] font-semibold m-0 text-[#ed4956] border border-t py-1 px-2 cursor-pointer"
            >
              Discard
            </button>
            <button
              onClick={cancelclick}
              className="w-full min-h-[48px] m-0 border border-t py-1 px-2 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscardModal;
