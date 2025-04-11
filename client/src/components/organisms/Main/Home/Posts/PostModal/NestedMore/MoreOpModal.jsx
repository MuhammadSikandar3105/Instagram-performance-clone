import React from "react";

const moreArr = [
  { name: "Report", color: true },
  { name: "Not interested" },
  { name: "Go to post" },
  { name: "Share to..." },
  { name: "Copy link" },
  { name: "Embed" },
  { name: "About this account" },
  { name: "Cancel", border: false },
];
const MoreOpModal = ({ setModal }) => {
  return (
    <div className="flex flex-col justify-center w-full h-fit items-center">
      {moreArr.map(({ name, color, border }) => {
        return (
          <Morebtn
            key={name}
            setmodal={setModal}
            name={name}
            color={color}
            border={border}
          />
        );
      })}
    </div>
  );
};

const Morebtn = ({ setmodal, name, border = true, color = false }) => {
  const handleClick = (e) => {
    let value = e.target.innerText.split(" ")[0];
    value === "Share" && setmodal((prev) => ({ ...prev, isShare: true }));
    value === "Report" && setmodal((prev) => ({ ...prev, isreport: true }));
    value === "About" && setmodal((prev) => ({ ...prev, isAcc: true }));
  };
  return (
    <div
      onClick={handleClick}
      className={`text-primary ${
        color && "text-red-500! font-semibold"
      } text-primary p-3 cursor-pointer w-full text-center ${
        border && "border-bottom border-b-[1px]"
      }`}
    >
      {name}
    </div>
  );
};

export default MoreOpModal;
