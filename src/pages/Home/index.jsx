import React from "react";

import HomePageContainer from "./components/HomePageContainer";
import CountriesFilter from "./components/CountriesFilter";

const HomePage = () => {
  return (
    <>
      <main>
        <CountriesFilter />
        <HomePageContainer />
      </main>
    </>
  );
};

export default HomePage;
