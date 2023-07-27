import React, { useContext, useEffect, useState } from "react";

import FlagCardLoader from "../loaders/FlagCardLoader";
import FlagCard from "../ui/FlagCard";
import { FlagsContext } from "../../contexts/FlagsContext";
import { LoaderContext } from "../../contexts/LoaderContext";
import { filterFlagsData } from "../../utils/filterFlagsData";

const FlagCards = ({ filterValue }) => {
  const { data } = useContext(FlagsContext);
  const { isLoading } = useContext(LoaderContext);
  const [currentData, setCurrentData] = useState(data);

  let filteredData = filterFlagsData(
    filterValue.selectedOption,
    filterValue.searchValue,
    data
  );

  return (
    <>
      <section className="col-12 col-md-9 card-section pb-1 rounded-2">
        <div
          className={`row justify-content-center justify-content-md-between scrollable-element`}
          id="cardsContent">
          {isLoading ? (
            <>
              <FlagCardLoader/>
              <FlagCardLoader/>
              <FlagCardLoader/>
              <FlagCardLoader/>
              <FlagCardLoader/>
              <FlagCardLoader/>
            </>
          ) : (
            filteredData.map((flag, index) => (
              <FlagCard data={flag} index={index} isFavourite={true} />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default FlagCards;
