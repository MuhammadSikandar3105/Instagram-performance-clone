import React, { useRef, useState } from "react";
import Modal from "./Modal/Modal";
import ProDetailModal from "./Modal/ProDetailModal";

const Proname = ({ name }) => {
  const [ismodal, setIsmodal] = useState(false);
  const [position, setPosition] = useState({ left: "0", top: "0" });
  const nameRef = useRef(null);

  const handleMouseEnter = () => {
    if (nameRef.current) {
      const rect = nameRef.current.getBoundingClientRect();
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
        ref={nameRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-sm text-secondary cursor-pointer font-semibold"
      >
        {name}
      </div>
      {ismodal && (
        <Modal>
          <ProDetailModal position={position} />
        </Modal>
      )}
    </>
  );
};

export default Proname;
