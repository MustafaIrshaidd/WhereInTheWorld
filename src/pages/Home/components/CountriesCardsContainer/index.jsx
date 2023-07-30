import React, { useContext } from "react";

import FlagCardLoader from "../../../../Components/loaders/FlagCardLoader"
import CountryCard from "../CountryCard";
import { FlagsContext } from "../../../../contexts/FlagsContext";
import { LoaderContext } from "../../../../contexts/LoaderContext";
import { filterFlagsData } from "../../../../utils/filterFlagsData";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { doesKeyExist } from "../../../../utils/verifyKeyExistance";
import NotFound from "../../../../Components/NotFound";

const CountriesCardsContainer = ({ filterValue }) => {
  const [favoriteFlags] = useLocalStorage("favouriteFlags");
  const { data } = useContext(FlagsContext);
  const { isLoading } = useContext(LoaderContext);

  let filteredData = filterFlagsData(
    filterValue.selectedOption,
    filterValue.searchValue,
    data,
    favoriteFlags
  );

  // Function to render FlagCardLoader components

  const renderFlagCardLoaders = () => {
    const numLoaders = 6;
    const loaders = Array.from({ length: numLoaders }, (_, index) => (
      <FlagCardLoader />
    ));
    return loaders;
  };

  const dragFromFlagsCards = (ev) => {
    let card = ev.target.closest(".card");
    if (card) card = card.parentNode;
    ev.dataTransfer.setData("text/html", card.outerHTML);
  };

  return (
    <>
      <section className="col-12 col-md-9 card-section pb-1 rounded-2">
        <div
          className={`row justify-content-center justify-content-md-between scrollable-element`}
          id="cardsContent">
          {isLoading ? (
            renderFlagCardLoaders()
          ) : filteredData.length === 0 ? (
            <NotFound />
          ) : (
            filteredData.map((flag, index) => (
              <CountryCard
                data={flag}
                index={index}
                isFavourite={doesKeyExist(favoriteFlags, flag.name.common)}
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
