import React from "react";
import { Proimage, Proname } from "./index";

const ProInfoCard = ({
  image,
  userName,
  name,
  detail,
  captions,
  children,
  size,
  modal,
}) => {
  const caption = captions?.split("#");
  return (
    <div className="flex w-full items-center justify-between">
      <div
        className={`flex gap-2 ${!captions && "items-center"}  justify-center`}
      >
        <Proimage image={image} size={size} modal={modal} />
        <div className="flex flex-col">
          <Proname name={userName} modal={modal} />
          <div
            className={`text-sm ${
              detail || captions ? "text-primary" : "btn-color"
            } cursor-pointer font-normal`}
          >
            {name ? (
              name
            ) : captions ? (
              <>
                <span>{caption}</span>
                {caption.map((caption, i) => {
                  if (i !== 0) {
                    return (
                      <span className="text-[#386d98]">
                        {"#"}
                        {caption}
                      </span>
                    );
                  }
                  return <br />;
                })}
              </>
            ) : (
              detail
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProInfoCard;
