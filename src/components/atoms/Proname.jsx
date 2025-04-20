import React, { Suspense, useRef } from "react";
import { Modal, ProDetailModal, useProModal } from "./index";

const Proname = ({ name, modal = true, classses }) => {
  const nameRef = useRef(null);
  const [ismodal, position, handleMouseEnter, handleMouseLeave] =
    useProModal(nameRef);

  return (
    <>
      <div
        {...(modal && {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          ref: nameRef,
        })}
        className={`${classses} text-sm w-fit text-secondary cursor-pointer font-semibold`}
      >
        {name}
      </div>
      {ismodal && (
        <Modal>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Suspense>
              <ProDetailModal position={position} />
            </Suspense>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Proname;
