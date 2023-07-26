import React from "react";

import BackBtn from "../forms/BackBtn";
import CardDetailsBody from "../ui/CardDetailsBody";
import CardDetailsImage from "../ui/CardDetailsImage";


const FlagDetailsContainer = () => {
  const ob = {
    countryOfficialName: "palestine",
    population: 42421412,
    Region: "Asia",
    subRegion: "fsfas",
    capital: "jerusalem",
    tId: "denar",
    currencies: "jod",
    languages: "arabic",
  };
  return (
    <>
      <section className="card-details py-5">
        <div className="centralized-container m-auto py-4">
          <BackBtn></BackBtn>
          <div className="row m-0 mt-4 gap-5" id="cardContent">
            <CardDetailsImage imageSource="/no"></CardDetailsImage>
            <CardDetailsBody data={ob}></CardDetailsBody>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlagDetailsContainer;
