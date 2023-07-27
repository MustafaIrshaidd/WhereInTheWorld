import React, { useContext } from "react";

import BackBtn from "../forms/BackBtn";
import CardDetailsBody from "../ui/CardDetailsBody";
import CardDetailsImage from "../ui/CardDetailsImage";
import CardDetailsLoader from "../loaders/CardDetailsLoader";

import { FlagsContext } from "../../contexts/FlagsContext";
import { LoaderContext } from "../../contexts/LoaderContext";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/usefetch";

const FlagDetailsContainer = () => {
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
                <CardDetailsLoader />
              </>
            ) : (
              <>
                <CardDetailsImage
                  imageSource={data?.[0].flags.svg}></CardDetailsImage>
                <CardDetailsBody data={data?.[0]}></CardDetailsBody>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FlagDetailsContainer;
