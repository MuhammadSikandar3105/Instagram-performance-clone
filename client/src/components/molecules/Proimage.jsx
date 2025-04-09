import React, { useRef, useState } from "react";
import ProDetailModal from "./Modal/ProDetailModal";
import Modal from "./Modal/Modal";

const Proimage = ({ image }) => {
  const [ismodal, setIsmodal] = useState(false);
  const [position, setPosition] = useState({ left: "0", top: "0" });
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setPosition({ left: rect.left, top: rect.top + rect.height });
    }
    setIsmodal(true);
  };
  const handleMouseLeave = () => {
    setIsmodal(false);
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
          <ProDetailModal position={position} />
        </Modal>
      )}
    </>
  );
};

export default Proimage;
