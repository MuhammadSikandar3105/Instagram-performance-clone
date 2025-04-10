import React, { Suspense } from "react";
import { MoreOpPosition } from "./index";

const MoreOption = ({ setIsMoreOpen }) => {
  return (
    <Suspense>
      <MoreOpPosition setIsMoreOpen={setIsMoreOpen}>
        <h1>More options</h1>
      </MoreOpPosition>
    </Suspense>
  );
};

export default MoreOption;
