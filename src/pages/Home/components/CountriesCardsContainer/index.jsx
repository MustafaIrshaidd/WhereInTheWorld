import React, { useContext } from "react";

import CountryCardLoader from "../../../../components/loaders/CountryCardLoader";
import CountryCard from "../CountryCard";
import { CountriesContext } from "../../../../contexts/CountriesContext";
import { LoaderContext } from "../../../../contexts/LoaderContext";
import { filterCountriesData } from "../../../../utils/countriesUtils";
import NotFound from "../../../../components/NotFound";
import { CountriesFilterContext } from "../../../../contexts/CountriesFilterContext";
import { FavCountriesContext } from "../../../../contexts/FavCountriesContext";

const CountriesCardsContainer = () => {
  // LocalStorage Custom Hook
  const {favCountries} = useContext(FavCountriesContext) 

  // Countries data Context
  const { data } = useContext(CountriesContext);

  // is Loading Context
  const { isLoading } = useContext(LoaderContext);

  // CountriesFilterContext
  const { filterBy } = useContext(CountriesFilterContext);

  // splitting filterBy props
  const { filterType, searchQuery } = filterBy;

  // Data are filtered through a utility - Frontend Filtering
  let filteredData = filterCountriesData(
    filterType,
    searchQuery,
    data,
    favCountries
  );

  // Function to render CountryCardLoader components
  const renderFlagCardLoaders = () => {
    const numLoaders = 6;
    const loaders = Array.from({ length: numLoaders }, (_, index) => (
      <CountryCardLoader />
    ));
    return loaders;
  };

  const dragFromFlagsCards = (ev) => {
    let card = ev.target.closest(".card");

    card && (card = card.parentNode);

    ev.dataTransfer.setData("text/html", card.outerHTML);
  };

  return (
    <>
      <section className="col-12 col-md-9 card-section pb-1 rounded-2">
        <div
          className={`row justify-content-center justify-content-md-start scrollable-element`}
          id="cardsContent">
          {isLoading ? (
            renderFlagCardLoaders()
          ) : filteredData.length === 0 ? (
            <NotFound content={"No Results Found !"} />
          ) : (
            filteredData.map((flag, index) => (
              <CountryCard
                data={flag}
                index={index}
                isFavourite={favCountries?.hasOwnProperty(flag.name.common)}
                draggable
                onDragStart={dragFromFlagsCards}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default CountriesCardsContainer;
