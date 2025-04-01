import React, { Suspense, useState } from "react";
import {
  CreatePosition,
  DiscardModal,
  Gragphotos,
  isdiscardmodal,
  Modal,
  newdata,
  RoutesIcons,
} from "./index";
import { useDispatch, useSelector } from "react-redux";
import PostForm from "./PostForm";

const CreateModal = () => {
  const [isform, setIsform] = useState(false);
  const { discardmodal } = useSelector((state) => state.createModal);
  const { pic } = useSelector((state) => state.createForm);
  const dispatch = useDispatch();

  const onChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      const imageurl = URL.createObjectURL(file);
      dispatch(newdata({ pic: imageurl }));
    }
  };

  const handleNextClick = () => {
    setIsform((prev) => !prev);
  };

  return (
    <CreatePosition isform={isform}>
      <Suspense>
        {pic ? (
          <>
            <div className="flex justify-between py-3 px-5">
              <p
                className="cursor-pointer"
                onClick={() =>
                  dispatch(isdiscardmodal({ modalname: "Discard" }))
                }
              >
                <RoutesIcons name="arrow" />
              </p>
              {isform ? (
                <p className="font-semibold">Crate new post</p>
              ) : (
                <p className="">Crop</p>
              )}
              {/* next btns */}
              {isform ? (
                <p className="cursor-pointer text-blue font-semibold">Share</p>
              ) : (
                <p
                  className="cursor-pointer text-blue font-semibold"
                  onClick={handleNextClick}
                >
                  Next
                </p>
              )}
            </div>
            <div className="h-[1px] w-[calc(100%)] borderlight"></div>
            <PostForm pic={pic} isform={isform} />
          </>
        ) : (
          <>
            <h2 className=" font-semibold text-center py-2">Create new post</h2>
            <div className="h-[1px] my-2 w-[calc(100%)] borderlight"></div>
            <div className="absolute top-1/2 left-1/2 -translate-1/2 flex justify-center items-center flex-col">
              <Gragphotos />
              <h2 className="mb-6 mt-4 text-xl">Drag photos and videos here</h2>
              <input
                onChange={onChange}
                type="file"
                name="file"
                id="choosefile"
                className="hidden "
              />
              <label
                htmlFor="choosefile"
                className="py-[7px] px-4 text-[14px] font-medium text-white bg-[#0094f6e9] cursor-pointer rounded-[8px] hover:bg-[rgb(0,149,246)] transition"
              >
                Select from Computer
              </label>
            </div>
          </>
        )}
        {discardmodal && (
          <Suspense>
            <Modal>{discardmodal && <DiscardModal />}</Modal>
          </Suspense>
        )}
      </Suspense>
    </CreatePosition>
  );
};

export default CreateModal;
