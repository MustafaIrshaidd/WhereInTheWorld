import React, { useContext } from "react";

import FlagCardLoader from "../loaders/FlagCardLoader";
import FlagCard from "../ui/FlagCard";
import { FlagsContext } from "../../contexts/FlagsContext";
import { LoaderContext } from "../../contexts/LoaderContext";

const FlagCards = () => {
  const { data } = useContext(FlagsContext);
  const { isLoading } = useContext(LoaderContext);
  return (
    <>
      <section className="col-12 col-md-9 card-section pb-1 rounded-2">
        <div
          className={`row justify-content-center justify-content-md-between scrollable-element`}
          id="cardsContent">
          {isLoading ? (
            <>
              <FlagCardLoader></FlagCardLoader>
              <FlagCardLoader></FlagCardLoader>
              <FlagCardLoader></FlagCardLoader>
              <FlagCardLoader></FlagCardLoader>
              <FlagCardLoader></FlagCardLoader>
              <FlagCardLoader></FlagCardLoader>
            </>
          ) : (
            data.map((flag, index) => (
              <FlagCard data={flag} index={index} isFavourite={true} />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default FlagCards;
