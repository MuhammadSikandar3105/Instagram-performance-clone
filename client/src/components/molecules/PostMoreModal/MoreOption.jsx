import React, { Suspense, useEffect, useState } from "react";
import {
  AcountModal,
  MoreOpModal,
  MoreOpPosition,
  ReportModal,
  ShareModal,
} from "./index";
import {} from "./index";
import { useNavigate } from "react-router-dom";

const MoreOption = ({ setIsMoreOpen }) => {
  const [isModal, setIsModal] = useState({
    isShare: false,
    isreport: false,
    isAcc: false,
    ispost: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    isModal.ispost && navigate("/reel/12");
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
