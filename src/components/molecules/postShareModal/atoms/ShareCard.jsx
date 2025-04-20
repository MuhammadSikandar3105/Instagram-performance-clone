const ShareCard = ({ image, children, link = false, id }) => {
  return (
    <div
      className={`cursor-pointer shrink-0 flex flex-col items-center p-2 w-[76px] h-auto ${
        !link && "hover w-28! rounded-md"
      }`}
    >
      <div className={` relative ${id && "w-18 h-18"} `}>
        <div
          className={`proimage relative rounded-full overflow-hidden ${
            link ? "w-12 h-12" : "w-18 h-18"
          }`}
        >
          <img
            src={image}
            alt="profile-image"
            className="rounded-full h-auto object-cover object-center"
          />
        </div>
        {id && (
          <div className="w-4 h-4 rounded-full bg-[#0095f6] border absolute bottom-0 right-0"></div>
        )}
      </div>
      <h3 className="text-xs w-full mt-2 text-center">{children}</h3>
    </div>
  );
};

export default ShareCard;
