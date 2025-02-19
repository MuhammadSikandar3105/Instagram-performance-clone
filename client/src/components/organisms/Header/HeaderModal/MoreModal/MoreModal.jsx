import React, { Suspense } from "react";
import { MoreItems, MoreModalPosition } from "./index";

const MoreModal = ({ openmodal }) => {
  return (
    <Suspense>
      <MoreModalPosition>
        <MoreItems openmodal={openmodal} />
      </MoreModalPosition>
    </Suspense>
  );
};

export default MoreModal;
