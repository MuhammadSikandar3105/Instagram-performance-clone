import React, { useState } from "react";
import { CreateModalIcons, SwitchButton } from "./index";

const PostForm = ({ pic, isform, data, setData }) => {
  const [iscolapse, setIscolapse] = useState(false);

  const handleColapseClick = () => {
    setIscolapse((prev) => !prev);
  };

  return (
    <div className="w-full h-fit flex justify-top items-center flex-col">
      {isform ? (
        <div className="w-full flex h-[557px] relative">
          <div className="w-[60%] h-full">
            <img
              src={pic}
              alt="post-pic"
              className="w-full h-full object-cover cursor-zoom-in"
            />
          </div>

          <div className="w-[40%] h-[calc(100%-48px)] fixed top-[48px] right-0 flex flex-col justify-top items-start overflow-y-auto">
            <div className="w-full">
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
                  value={data.caption}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, caption: e.target.value }))
                  }
                  type="text"
                  placeholder="Caption..."
                  rows="6"
                  className="w-full overflow-y-auto text-base focus:border-0 focus:outline-0 px-4 pb-4  resize-none"
                />
                <Input name="location" data={data} setData={setData} />
                <Input name="colaborators" data={data} setData={setData} />
              </form>
            </div>
            <div
              className={`settings w-full ${
                !iscolapse && "border-b border-[#dbdbdb]"
              }`}
            >
              <div className="advance w-full p-4 relative">
                <p>Advanced settings</p>
                <div
                  onClick={handleColapseClick}
                  className={`icon absolute cursor-pointer ${
                    !iscolapse && "rotate-[180deg]"
                  } right-5 top-1/2 -translate-y-1/2`}
                >
                  <CreateModalIcons name={"chevron"} />
                </div>
              </div>
              <div
                className={`px-4 mb-5 ${
                  !iscolapse && "hidden"
                } items-center justify-between`}
              >
                <Setting
                  heading="Hide like and view counts on this post"
                  disc="Only you will see the total number of likes and views on this post. You can change this later by going to the ··· menu at the top of the post.To hide like counts on other people's posts, go to your account settings."
                  name="islikehide"
                  data={data}
                  setData={setData}
                />
                <Setting
                  heading="Turn off commenting"
                  disc="You can change this later by going to the ··· menu at the top of your post."
                  name="iscommenthide"
                  data={data}
                  setData={setData}
                />
              </div>
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

const Input = ({ name, data, setData }) => {
  return (
    <div className="w-full h-[44px] flex items-center relative">
      <input
        value={data[name]}
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            [name]: e.target.value,
          }))
        }
        type="text"
        placeholder={`Add ${name}`}
        className="w-full h-[44px] text-base focus:outline-0 px-4 py-1"
      />
      <div className="icon absolute right-5 top-1/2 -translate-y-1/2">
        <CreateModalIcons name={name} />
      </div>
    </div>
  );
};

const Setting = ({ name, data, heading, disc, setData }) => {
  console.log(data[name]);
  return (
    <div className="py-3">
      <div className="flex items-center justify-between">
        <p className="text-lg">{heading}</p>
        <div
          className="switch"
          onClick={() =>
            setData((prev) => ({
              ...prev,
              [name]: !prev[name],
            }))
          }
        >
          <SwitchButton condition={data[name]} />
        </div>
      </div>
      <p className="text-sm">{disc}</p>
    </div>
  );
};

export default PostForm;
