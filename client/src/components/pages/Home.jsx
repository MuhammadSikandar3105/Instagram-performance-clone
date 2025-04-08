import React from "react";
import { FriendsSugg, MainContent, Posts } from "./index";

const Home = () => {
  return (
    <MainContent>
      <div className="flex justify-center items-start">
        <Posts />
        <FriendsSugg />
      </div>
    </MainContent>
  );
};

export default Home;
