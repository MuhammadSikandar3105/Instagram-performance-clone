import React, { useState } from "react";
import { MainContent, picture, RoutesIcons, UtilityIcons } from "./index";
import { useGetpostsQuery } from "../../store/slices/apislice";

const Profile = () => {
  const [route, setRoute] = useState("SAVED");
  return (
    <MainContent>
      <div className="max-w-[935px] w-full m-auto pt-[30px] px-5 flex justify-center min-h-screen">
        <div className=" w-full">
          <div className="flex items-center gap-8">
            <div className="relative max-w-[283px] w-full flex items-center justify-center overflow-hidden">
              <img
                src={picture}
                alt=""
                className="w-36 h-36 rounded-full object-center object-cover"
              />
            </div>
            <div className="flex-1 gap-5 flex flex-col">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-normal">mr.malik2186</h2>
                <button className="h-8 px-4 py-1 text-sm font-semibold bg-[#efefef] rounded-md">
                  Edit profile
                </button>
                <button className="h-8 px-4 py-1 text-sm font-semibold bg-[#efefef] rounded-md">
                  View archive
                </button>
                <button className="text-xl">
                  <RoutesIcons name="setting" />
                </button>
              </div>
              <div className="mt-2 flex gap-6 text-gray-600">
                <span>
                  <span className="text-black font-semibold">0</span> posts
                </span>
                <span>
                  <span className="text-black font-semibold">4</span> followers
                </span>
                <span>
                  <span className="text-black font-semibold">10</span> following
                </span>
              </div>
              <div className="mt-2">
                <p className="text-sm font-semibold mb-[6px]">Mr. MAliK</p>
                <p className="bg-[#efefef] text-xs w-fit p-1 rounded-2xl">
                  @mr.malik2186
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-start">
              <div className="flex items-center flex-col">
                <div className="cursor-pointer w-22 flex items-center justify-center h-22 border rounded-full">
                  <div className="relative cursor-pointer w-[93%] h-[93%] flex justify-center items-center text-[#c7c7c7] bg-[#f5f5f5] rounded-full text-4xl">
                    <UtilityIcons name="plusicon" size="44" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-1">New</p>
              </div>
            </div>
          </div>
          <div className="mt-6 border-t border-[#dbdbdb] h-14 flex justify-center gap-16 text-gray-600">
            {/* active route */}
            <RouteBtn Set={setRoute} route={route} name="POSTS" />
            <RouteBtn Set={setRoute} route={route} name="SAVED" />
            <RouteBtn Set={setRoute} route={route} name="TAGGED" />
          </div>
          {/* posts section */}
          {route === "TAGGED" ? (
            <Taged />
          ) : route === "SAVED" ? (
            <Saved />
          ) : (
            <PostCard />
          )}
        </div>
      </div>
    </MainContent>
  );
};

const PostCard = () => {
  const { data: tasksList, isError, isLoading, error } = useGetpostsQuery();
  return (
    <div className="posts-card w-full flex flex-col">
      <div className="cards flex items-center flex-wrap justify-start">
        {isLoading ? (
          <p>Loading...</p>
        ) : tasksList?.length > 0 ? (
          tasksList?.map(({ pic, id }) => (
            <div
              key={id}
              className="card ml-1 w-[294px] h-[396px] flex items-center "
            >
              <img src={picture} alt="" className="w-full h-fit" />
            </div>
          ))
        ) : (
          <div className="text-center w-full flex items-center my-16 flex-col">
            <svg
              aria-label="When you share photos, they will appear on your profile."
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="62"
              role="img"
              viewBox="0 0 96 96"
              width="62"
            >
              <title>
                When you share photos, they will appear on your profile.
              </title>
              <circle
                cx="48"
                cy="48"
                fill="none"
                r="47"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></circle>
              <ellipse
                cx="48.002"
                cy="49.524"
                fill="none"
                rx="10.444"
                ry="10.476"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2.095"
              ></ellipse>
              <path
                d="M63.994 69A8.02 8.02 0 0 0 72 60.968V39.456a8.023 8.023 0 0 0-8.01-8.035h-1.749a4.953 4.953 0 0 1-4.591-3.242C56.61 25.696 54.859 25 52.469 25h-8.983c-2.39 0-4.141.695-5.181 3.178a4.954 4.954 0 0 1-4.592 3.242H32.01a8.024 8.024 0 0 0-8.012 8.035v21.512A8.02 8.02 0 0 0 32.007 69Z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            <h4 className="text-3xl font-extrabold my-6">Share Photos</h4>
            <p className="mb-6 text-sm">
              When you share photos, they will apear on your porfile.
            </p>
            <a href="" className="text-[#0095F6] font-semibold text-sm">
              Share your first photo
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
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
      <div className="text-center max-w-[350px] m-auto w-full flex items-center my-16 flex-col">
        <svg
          aria-label="Save"
          class="x1lliihq x1n2onr6 x5n08af"
          fill="currentColor"
          height="62"
          role="img"
          viewBox="0 0 96 96"
          width="62"
        >
          <title>Save</title>
          <circle
            cx="48"
            cy="48"
            fill="none"
            r="47"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-width="2"
          ></circle>
          <path
            d="M66 68.685 49.006 51.657a1.42 1.42 0 0 0-2.012 0L30 68.685V27h36Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-width="2"
          ></path>
        </svg>
        <h4 className="text-3xl font-extrabold my-6">Save</h4>
        <p className="mb-6 text-sm">
          Save photos and videos that you want to see again. No one is notified,
          and only you can see what you've saved.
        </p>
      </div>
    </div>
  );
};
const Taged = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="text-center max-w-[350px] m-auto w-full flex items-center mt-20 mb-16 flex-col">
        <svg
          aria-label="Photos of you"
          class="x1lliihq x1n2onr6 x5n08af"
          fill="currentColor"
          height="62"
          role="img"
          viewBox="0 0 96 96"
          width="62"
        >
          <title>Photos of you</title>
          <circle
            cx="48"
            cy="48"
            fill="none"
            r="47"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></circle>
          <path
            d="M56.826 44.119a8.824 8.824 0 1 1-8.823-8.825 8.823 8.823 0 0 1 8.823 8.825Z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></path>
          <path
            d="M63.69 67.999a9.038 9.038 0 0 0-9.25-8.998H41.56A9.038 9.038 0 0 0 32.31 68"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
          <path
            d="M48 20.215c-2.94 0-7.125 8.76-11.51 8.785h-4.705A8.785 8.785 0 0 0 23 37.784v22.428a8.785 8.785 0 0 0 8.785 8.785h32.43A8.785 8.785 0 0 0 73 60.212V37.784A8.785 8.785 0 0 0 64.215 29h-4.704c-4.385-.026-8.57-8.785-11.511-8.785Z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></path>
        </svg>
        <h4 className="text-3xl font-extrabold my-6">Photos of you</h4>
        <p className="mb-6 text-sm">
          When people tag you in photos, they'll appear here.
        </p>
      </div>
    </div>
  );
};

const RouteBtn = ({ route, name, Set }) => {
  return (
    <div
      onClick={() => Set(name)}
      className={`cursor-pointer ${
        route === name && "border-t text-black"
      } font-medium text-xs flex items-center`}
    >
      <UtilityIcons name={name} size="12" />
      <span className="ml-[6px]">{name}</span>
    </div>
  );
};
export default Profile;
