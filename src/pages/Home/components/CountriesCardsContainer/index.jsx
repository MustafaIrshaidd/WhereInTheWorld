import React, { useContext } from "react";

import CountryCardLoader from "../../../../Components/loaders/CountryCardLoader";
import CountryCard from "../CountryCard";
import { CountriesContext } from "../../../../contexts/CountriesContext";
import { LoaderContext } from "../../../../contexts/LoaderContext";
import { filterCountriesData } from "../../../../utils/countriesUtils";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import NotFound from "../../../../Components/NotFound";

const CountriesCardsContainer = ({ filterBy }) => {
  // LocalStorage Custom Hook
  const [favoriteFlags] = useLocalStorage("favouriteFlags");

  // Countries data Context
  const { data } = useContext(CountriesContext);

  // is Loading Context
  const { isLoading } = useContext(LoaderContext);

  // splitting filterBy props
  const { filterType, searchQuery } = filterBy;

  // Data are filtered through a utility - Frontend Filtering
  let filteredData = filterCountriesData(
    filterType,
    searchQuery,
    data,
    favoriteFlags
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
                isFavourite={favoriteFlags?.hasOwnProperty(flag.name.common)}
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
