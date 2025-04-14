import React, { Suspense, useState } from "react";
import { data, Picker, UtilityIcons24 } from "./index";
import { useSelector } from "react-redux";

const CommentInput = () => {
  const darkTheme = useSelector((state) => state.theme.darktheme);
  const [comment, setComment] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="comment relative w-full h-fit">
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
        placeholder="Add a comment..."
        className="py-1 focus:outline-none w-[75%]"
      />
      <div
        className={`${
          comment.trim().length === 0 && "hidden"
        } text-[#0095F6] font-semibold absolute right-7 top-1/2 -translate-y-1/2 cursor-pointer `}
      >
        Post
      </div>
      <div
        onClick={() => setShowPicker((prev) => !prev)}
        className={`absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:text-[#737373]`}
      >
        <UtilityIcons24 name="emoji" size="13" />
      </div>
      {showPicker && (
        <div
          className="absolute bottom-10 right-0 z-50 emoji-picker-container overflow-y-auto"
          style={{ height: "300px" }}
        >
          <Suspense>
            <Picker
              data={data}
              onEmojiSelect={(emoji) =>
                setComment((prev) => prev + emoji.native)
              }
              previewPosition="none"
              navPosition="none"
              skinTonePosition="none"
              theme={darkTheme ? "dark" : "light"}
            />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default CommentInput;
