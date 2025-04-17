import { Utilitity96 } from "./index";
const Saved = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center justify-between">
        <p className="text-xs text-[#737373]">
          Only you can see what you've saved
        </p>
        <h5 className="cursor-pointer w-fit text-sm text-[#0095F6] font-semibold">
          +<span>New Collaction</span>
        </h5>
      </div>
      <div className="text-center max-w-[350px] m-auto w-full flex items-center mt-16 flex-col">
        <Utilitity96 name="saved" size="62" />
        <h4 className="text-3xl font-extrabold my-6">Save</h4>
        <p className="mb-6 text-sm">
          Save photos and videos that you want to see again. No one is notified,
          and only you can see what you've saved.
        </p>
      </div>
    </div>
  );
};

export default Saved;
