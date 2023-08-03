import React from "react";

import FavCountriesContainer from "../FavCountriesContainer";
import CountriesCardsContainer from "../CountriesCardsContainer";

const HomePageContainer = ({filterBy}) => {
  return (
    <>
      <div class="centralized-container m-auto">
        <div class="row justify-content-center m-0">
          <FavCountriesContainer/>
          <CountriesCardsContainer filterBy={filterBy}/>
        </div>
      </div>
    </>
  );
};

export default HomePageContainer;
