import React, { useContext } from "react";

import FlagCardLoader from "../loaders/FlagCardLoader";
import FlagCard from "../ui/FlagCard";
import { FlagsContext } from "../../contexts/FlagsContext";
import { LoaderContext } from "../../contexts/LoaderContext";
import { filterFlagsData } from "../../utils/filterFlagsData";

const FlagCards = ({ filterValue }) => {
  const { data } = useContext(FlagsContext);
  const { isLoading } = useContext(LoaderContext);

  let filteredData = filterFlagsData(
    filterValue.selectedOption,
    filterValue.searchValue,
    data
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
          {isLoading
            ? renderFlagCardLoaders()
            : filteredData.map((flag, index) => (
                <FlagCard
                  data={flag}
                  index={index}
                  isFavourite={true}
                  draggable
                  onDragStart={dragFromFlagsCards}
                /> 
              ))}
        </div>
      </section>
    </>
  );
};

export default FlagCards;
