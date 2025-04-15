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
  const caption = captions?.split(" #");
  return (
    <div className="flex w-full items-center justify-between">
      <div
        className={`flex relative gap-2 ${
          !captions && "items-center"
        }  justify-center`}
      >
        <Proimage image={image} size={size} modal={modal} />
        <div className="flex flex-col">
          <Proname name={userName} modal={modal} />
          <div
            className={`text-sm ${
              detail || captions ? "text-primary" : "btn-color"
            } font-normal`}
          >
            {name ? (
              name
            ) : captions ? (
              <>
                <span>{caption[0]}</span>
                {caption.map((tags, i) => {
                  if (i !== 0) {
                    return (
                      <span key={i} className="text-[#386d98] cursor-pointer">
                        {" #"}
                        {tags}
                      </span>
                    );
                  }
                  return <br key={i} />;
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
