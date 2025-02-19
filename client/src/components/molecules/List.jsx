import React, { useEffect, useRef } from "react";
import Link from "../atoms/Link";

const List = React.memo(({ to, spanid, handleModal, Icon, spanname }) => {
  const buttonRef = useRef(null);

  return (
    <li
      className="p-3 w-full rounded-lg cursor-pointer hover"
      ref={buttonRef}
      onClick={() => handleModal(spanid, buttonRef)}
    >
      <Link
        to={to}
        listspan={spanid}
        Icon={Icon}
        spanclasses="i-d"
        spanname={spanname}
      />
    </li>
  );
});

export default List;
