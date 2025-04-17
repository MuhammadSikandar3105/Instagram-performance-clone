import { Suspense } from "react";
import { HeaderModal, RoutesIcons, UtilityIcons24 } from "../index";

const ShareModal = ({ setMore }) => {
  const handleClick = () => {
    setMore(false);
  };
  const shareArr = [
    {
      name: "Share to Threads",
      icon: <UtilityIcons24 name="thread" viewBox="0 0 192 192" size="24" />,
    },
    { name: "Share to Facebook", icon: <UtilityIcons24 name="facebook" /> },
    { name: "Share to Messanger", icon: <RoutesIcons name="messages" /> },
    { name: "Share to Twitter", icon: <UtilityIcons24 name="twitter" /> },
    { name: "Share via Email", icon: <UtilityIcons24 name="email" /> },
    { name: "QR code", icon: <UtilityIcons24 name="qr" /> },
    { name: "Copy link", icon: <UtilityIcons24 name="link" /> },
    { name: "Cancel" },
  ];
  return (
    <div className="flex flex-col justify-center py-1 w-full h-fit items-center">
      <Suspense>
        <HeaderModal name="Share to..." handleClick={handleClick} />
      </Suspense>
      <div className="py-2 w-full h-[360px] overflow-y-auto">
        {shareArr.map(({ name, icon }, i) => {
          return <Sharebtn key={i} setMore={setMore} name={name} icon={icon} />;
        })}
      </div>
    </div>
  );
};

const Sharebtn = ({ setMore, name, icon }) => {
  const handleClick = (e) => {
    e.target.innerText === "Cancel" && setMore(false);
  };
  return (
    <div
      onClick={handleClick}
      className={`text-primary font-normal text-sm text-primary py-2 px-4 cursor-pointer w-full text-start hover:bg-[#dbdbdb66]`}
    >
      <div className="h-8 flex items-center justify-start gap-3">
        {icon}
        <div className={`${!icon && "px-9 text-[#00376B]"}`}>{name}</div>
      </div>
    </div>
  );
};

export default ShareModal;
