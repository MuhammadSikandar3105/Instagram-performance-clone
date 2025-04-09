import React, { Suspense, useRef, useState } from "react";
import { Modal, ProDetailModal } from "./index";

const Proname = ({ name }) => {
  const [ismodal, setIsmodal] = useState(false);
  const [position, setPosition] = useState({ left: "0", top: "0" });
  const nameRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    if (nameRef.current) {
      const rect = nameRef.current.getBoundingClientRect();
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
        ref={nameRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-sm text-secondary cursor-pointer font-semibold"
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
