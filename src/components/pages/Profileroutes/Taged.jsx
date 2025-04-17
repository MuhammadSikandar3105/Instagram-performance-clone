import { Utilitity96 } from "./index";
const Taged = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="text-center max-w-[350px] m-auto w-full flex items-center mt-20 flex-col">
        <Utilitity96 name="tag" size="62" />
        <h4 className="text-3xl font-extrabold my-6">Photos of you</h4>
        <p className="mb-6 text-sm">
          When people tag you in photos, they'll appear here.
        </p>
      </div>
    </div>
  );
};

export default Taged;
