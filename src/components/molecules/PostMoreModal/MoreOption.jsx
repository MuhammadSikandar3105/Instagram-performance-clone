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
          <Suspense>
            <ShareModal setshare={setIsModal} setMore={setIsMoreOpen} />
          </Suspense>
        ) : isModal.isreport ? (
          <Suspense>
            <ReportModal setMore={setIsMoreOpen} />
          </Suspense>
        ) : isModal.isAcc ? (
          <Suspense>
            <AcountModal setMore={setIsMoreOpen} />
          </Suspense>
        ) : (
          <Suspense>
            <MoreOpModal setModal={setIsModal} />
          </Suspense>
        )}
      </MoreOpPosition>
    </Suspense>
  );
};

export default MoreOption;
