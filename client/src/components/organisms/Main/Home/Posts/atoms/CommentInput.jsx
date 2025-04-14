import { useState } from "react";

const CommentInput = () => {
  const [focus, setFocus] = useState(false);
  return (
    <div className="comment relative w-full h-fit">
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type="text"
        placeholder="Add a comment..."
        className="py-1 focus:outline-none"
      />
      <div
        className={`${
          !focus && "hidden"
        } text-[#0095F6] font-semibold absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer `}
      >
        Post
      </div>
    </div>
  );
};

export default CommentInput;
