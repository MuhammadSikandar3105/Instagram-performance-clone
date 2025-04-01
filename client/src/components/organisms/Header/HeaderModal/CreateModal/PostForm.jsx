import React from "react";

const PostForm = ({ pic, isform }) => {
  return (
    <div className="w-full relative h-fit flex justify-top items-center flex-col">
      {isform ? (
        <div className="w-full flex h-[557px]">
          <div className="w-[60%] h-full">
            <img
              src={pic}
              alt="post-pic"
              className="w-full h-full object-cover cursor-zoom-in"
            />
          </div>

          <div className="w-[40%] h-fit fixed right-0 flex flex-col justify-center items-start overflow-y-auto">
            <div className="profilecap">
              <div className="h-[60px] flex items-center px-4 gap-2">
                <div className="image w-[30px] h-[30px] overflow-hidden rounded-full ">
                  <img
                    src={pic}
                    alt=""
                    className="object-center object-cover"
                  />
                </div>
                <div className="name">
                  <p className="font-semibold text-sm">mr.malik345</p>
                </div>
              </div>
              <form className="w-full">
                <textarea
                  type="text"
                  placeholder="Caption..."
                  rows="6"
                  className="w-full overflow-y-auto text-base focus:border-0 focus:outline-0 px-4 pb-4  resize-none"
                />
                <input
                  type="text"
                  placeholder="Add location"
                  className=" w-full h-[44px] text-base focus:outline-0 mt-1 px-4 py-1 border-t border-[#dbdbdb]"
                />
                <input
                  type="text"
                  placeholder="Add collaborators"
                  className=" w-full h-[44px] text-base focus:outline-0 px-4 py-1"
                />
              </form>
            </div>
            <div className="advance w-full p-4 border-b border-[#dbdbdb]">
              <p>Advanced settings</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <img
            src={pic}
            className="object-center object-cover"
            alt="selected-image"
          />
        </div>
      )}
    </div>
  );
};

export default PostForm;
