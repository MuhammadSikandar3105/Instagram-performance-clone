import React, { Suspense, useState } from "react";
import {
  AcountModal,
  MoreOpModal,
  MoreOpPosition,
  ReportModal,
  ShareModal,
} from "./index";
import {} from "./index";

const MoreOption = ({ setIsMoreOpen }) => {
  const [isModal, setIsModal] = useState({
    isShare: false,
    isreport: false,
    isAcc: false,
  });

  return (
    <Suspense>
      <MoreOpPosition setIsMoreOpen={setIsMoreOpen}>
        {isModal.isShare ? (
          <ShareModal setshare={setIsModal} setMore={setIsMoreOpen} />
        ) : isModal.isreport ? (
          <ReportModal setMore={setIsMoreOpen} />
        ) : isModal.isAcc ? (
          <AcountModal setMore={setIsMoreOpen} />
        ) : (
          <MoreOpModal setModal={setIsModal} />
        )}
      </MoreOpPosition>
    </Suspense>
  );
};

export default MoreOption;
