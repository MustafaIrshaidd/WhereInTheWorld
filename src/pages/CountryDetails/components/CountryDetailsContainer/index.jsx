import React, { useContext } from "react";

import BackButton from "../../../../components/forms/BackButton";
import { LoaderContext } from "../../../../contexts/LoaderContext";
import CountryDetailsCardLoader from "../../../../components/loaders/CountryDetailsCardLoader";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/usefetch";
import CountryDetailsCard from "../CountryDetailsCard";

const CountryDetailsContainer = () => {
  // isLoading Context
  const { isLoading, stopLoader, startLoader } = useContext(LoaderContext);

  // get CountryName from params
  const { countryName } = useParams();

  // fetching API on countryName
  const { data, error } = useFetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );

  // if Data arrived stopLoader
  data ? stopLoader() : startLoader();

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
