import React, { Suspense, useRef } from "react";
import { Modal, ProDetailModal } from "./index";
import { useProModal } from "../../lib/hooks/useProModal";

const Proimage = ({ image, size, modal = true }) => {
  const imageRef = useRef(null);
  const [ismodal, position, handleMouseEnter, handleMouseLeave] =
    useProModal(imageRef);

  return (
    <>
      <div
        {...(modal && {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          ref: imageRef,
        })}
        style={{ width: size || 32, height: size || 32 }}
        className={`relative mr-2 rounded-full p-1 overflow-hidden`}
      >
        <img
          src={image}
          className="absolute top-1/2 left-1/2 -translate-1/2"
          alt=""
        />
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

export default Proimage;
