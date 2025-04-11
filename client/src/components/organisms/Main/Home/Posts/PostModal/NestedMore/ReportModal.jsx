import { HeaderModal, MoreModalIcons } from "../index";

const shareArr = [
  { name: "I just don't like it" },
  { name: "Bullying or unwanted contact" },
  { name: "Sucide, selft-injury or eating disorders" },
  { name: "Violence, hate or exploitation" },
  { name: "Selling or promoting restricted items" },
  { name: "Nudity or sexual activity" },
  { name: "Scam, fraud or spam" },
  { name: "False information", border: false },
];
const ReportModal = ({ setMore }) => {
  const handleClick = () => {
    setMore(false);
  };
  return (
    <div className="flex flex-col justify-center py-1 w-full h-fit items-center">
      <HeaderModal name="Report" handleClick={handleClick} />
      <div
        className={`text-primary py-3 pt-5 px-4  font-semibold text-primary  cursor-pointer w-full text-start border-bottom border-b-[1px]`}
      >
        Why are you reporting this post?
      </div>
      {shareArr.map(({ name, icon, border }) => {
        return (
          <Reportbtn
            key={name}
            setMore={setMore}
            name={name}
            icon={icon}
            border={border}
          />
        );
      })}
    </div>
  );
};

const Reportbtn = ({ setMore, name, border = true }) => {
  const handleClick = (e) => {
    e.target.innerText === "Cancel" && setMore(false);
  };
  return (
    <div
      onClick={handleClick}
      className={`${
        border && "border-bottom border-b-[1px]"
      } text-primary font-normal text-sm text-primary py-2 px-4 cursor-pointer w-full text-start`}
    >
      <div className="h-8 flex items-center justify-between gap-3">
        {name}
        <div className="rotate-[90deg] btn-color">
          <MoreModalIcons name="back" size="17" />
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
