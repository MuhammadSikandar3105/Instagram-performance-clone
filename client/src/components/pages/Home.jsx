import React from "react";
import { MainContent } from "./index";

const Home = React.memo(() => {
  return (
    <>
      <MainContent>
        <h1 className="text-center">Home</h1>
      </MainContent>
    </>
  );
});

export default Home;
