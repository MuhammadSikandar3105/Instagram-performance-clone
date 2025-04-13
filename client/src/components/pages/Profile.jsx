import React, { Suspense, useState } from "react";
import {
  Footer,
  MainContent,
  picture,
  RoutesIcons,
  Saved,
  Taged,
  Utilitity96,
  UtilityIcons24,
} from "./index";
import { useGetpostsQuery } from "../../store/slices/apislice";

const Profile = () => {
  const [route, setRoute] = useState("POSTS");
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
                <button className="h-8 px-4 py-1 text-sm font-semibold bg-border rounded-md">
                  Edit profile
                </button>
                <button className="h-8 px-4 py-1 text-sm font-semibold bg-border rounded-md">
                  View archive
                </button>
                <button className="text-xl">
                  <RoutesIcons name="setting" />
                </button>
              </div>
              <div className="mt-2 flex gap-6 graytext">
                <span>
                  <span className="text-secondary font-semibold">0</span> posts
                </span>
                <span>
                  <span className="text-secondary font-semibold">4</span>{" "}
                  followers
                </span>
                <span>
                  <span className="text-secondary font-semibold">10</span>{" "}
                  following
                </span>
              </div>
              <div className="mt-2">
                <p className="text-sm font-semibold mb-[6px]">Mr. MAliK</p>
                <p className="bg-border text-xs w-fit p-1 rounded-2xl">
                  @mr.malik2186
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-start">
              <div className="flex items-center flex-col">
                <div className="cursor-pointer w-22 flex items-center justify-center h-22 border rounded-full">
                  <div className="relative cursor-pointer w-[93%] h-[93%] flex justify-center items-center text-[#c7c7c7] bg-border rounded-full text-4xl">
                    <UtilityIcons24 name="plusicon" size="44" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-1">New</p>
              </div>
            </div>
          </div>
          <div className="mt-6 border-t border-top h-14 flex justify-center gap-16 text-gray-600">
            {/* active route */}
            <RouteBtn Set={setRoute} route={route} name="POSTS" />
            <RouteBtn Set={setRoute} route={route} name="SAVED" />
            <RouteBtn Set={setRoute} route={route} name="TAGGED" />
          </div>
          {/* posts section */}
          {route === "TAGGED" ? (
            <Suspense>
              <Taged />
            </Suspense>
          ) : route === "SAVED" ? (
            <Suspense>
              <Saved />
            </Suspense>
          ) : (
            <PostCard />
          )}
          <Footer />
        </div>
      </div>
    </MainContent>
  );
};

const PostCard = () => {
  const { data: posts, isError, isLoading, error } = useGetpostsQuery();
  return (
    <div className="posts-card w-full flex flex-col">
      <div className="cards flex items-center mb-16 flex-wrap justify-center">
        {isLoading ? (
          //animate this
          <div className="my-10 text-black animate-spin">
            <UtilityIcons24 name="loader" viewBox="0 0 100 100" />
          </div>
        ) : posts?.length > 0 ? (
          posts?.map(({ pic, id }) => (
            <div
              key={id}
              className="card ml-1 w-[294px] h-[396px] flex items-center "
            >
              <img src={picture} alt="" className="w-full h-fit" />
            </div>
          ))
        ) : (
          <div className="text-center w-full flex mt-16 items-center flex-col">
            <Utilitity96 name="post" size="62" />
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

const RouteBtn = React.memo(({ route, name, Set }) => {
  return (
    <div
      onClick={() => Set(name)}
      className={`cursor-pointer ${
        route === name && "border-t text-secondary"
      } font-medium text-xs flex items-center`}
    >
      <UtilityIcons24 name={name} size="12" />
      <span className="ml-[6px]">{name}</span>
    </div>
  );
});
export default Profile;
