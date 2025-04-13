import { Suspense, useState } from "react";
import { UtilityIcons24 } from "../pages";
import { Modal, MoreOption } from "./index";

const MoreBtn = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const handleClick = () => {
    setIsMoreOpen(true);
  };
  return (
    <>
      <div onClick={handleClick} className="hamberger cursor-pointer">
        <UtilityIcons24 name="more" />
      </div>
      {isMoreOpen && (
        <Suspense>
          <Modal>
            <MoreOption setIsMoreOpen={setIsMoreOpen} />
          </Modal>
        </Suspense>
      )}
    </>
  );
};

export default MoreBtn;
