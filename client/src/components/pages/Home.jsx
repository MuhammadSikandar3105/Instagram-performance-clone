import React from "react";
import { Footer, FriendsSugg, MainContent, Posts } from "./index";

const Home = () => {
  return (
    <MainContent>
      <div className="flex justify-center items-start">
        <Posts />
        <FriendsSugg />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </MainContent>
  );
};

export default Home;
