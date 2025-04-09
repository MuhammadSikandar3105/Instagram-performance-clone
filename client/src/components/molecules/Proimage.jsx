import React, { Suspense, useRef, useState } from "react";
import { Modal, ProDetailModal } from "./index";

const Proimage = ({ image }) => {
  const [ismodal, setIsmodal] = useState(false);
  const [position, setPosition] = useState({ left: "0", top: "0" });
  const imageRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setPosition({ left: rect.left, top: rect.top + rect.height });
    }
    setIsmodal(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsmodal(false);
    }, 150);
  };
  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={imageRef}
        className={`relative mr-2 rounded-full p-1 w-8 h-8 overflow-hidden`}
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
