import React, { useContext } from "react";

import  BackBtn  from "../../../../Components/forms/BackBtn";
import { LoaderContext } from "../../../../contexts/LoaderContext";
import  CountryDetailsCardLoader  from "../../../../Components/loaders/CountryDetailsCardLoader";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/usefetch";
import  CountryDetailsCard  from "../CountryDetailsCard";

const CountryDetailsContainer = () => {
  const { isLoading, stopLoader, startLoader } = useContext(LoaderContext);
  const { countryName } = useParams();

  const { data, error } = useFetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );

  console.log(data?.[0]);

  data ? stopLoader() : startLoader();

  return (
    <>
      <section className="card-details py-5">
        <div className="centralized-container m-auto py-4">
          <div className="mb-5 pb-4">
            <BackBtn></BackBtn>
          </div>

          <div className="row m-0 mt-4 gap-5" id="cardContent">
            {isLoading || !data ? (
              <>
                <CountryDetailsCardLoader />
              </>
            ) : (
              <>
                <CountryDetailsCard data={data?.[0]}></CountryDetailsCard>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryDetailsContainer;
