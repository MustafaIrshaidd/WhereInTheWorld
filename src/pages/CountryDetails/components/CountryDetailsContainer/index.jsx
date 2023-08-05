import React, { useContext } from "react";

import BackButton from "../../../../components/forms/BackButton";
import { LoaderContext } from "../../../../contexts/LoaderContext";
import CountryDetailsCardLoader from "../../../../components/loaders/CountryDetailsCardLoader";
import CountryDetailsCard from "../CountryDetailsCard";
import { CountryDetailsContext } from "../../../../contexts/CountryDetailsContext";

const CountryDetailsContainer = () => {
  // isLoading Context
  const { isLoading } = useContext(LoaderContext);

  // using Context to get Countries Details Data
  const { data } = useContext(CountryDetailsContext);

  return (
    <>
      <section className="card-details py-5">
        <div className="centralized-container m-auto py-4">
          <div className="mb-5 pb-4">
            <BackButton />
          </div>

          <div className="row m-0 mt-4 gap-5" id="cardContent">
            {isLoading || !data ? (
              <>
                <CountryDetailsCardLoader />
              </>
            ) : (
              <>
                <CountryDetailsCard data={data?.[0]} />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryDetailsContainer;
