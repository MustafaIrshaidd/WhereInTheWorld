import React, { useContext } from "react";

import BackBtn from "../forms/BackBtn";
import CardDetailsBody from "../ui/CardDetailsBody";
import CardDetailsImage from "../ui/CardDetailsImage";
import CardDetailsLoader from "../loaders/CardDetailsLoader"

import { FlagsContext } from "../../contexts/FlagsContext";
import { LoaderContext } from "../../contexts/LoaderContext";
import { useParams } from "react-router-dom";

const FlagDetailsContainer = () => {
  const { isLoading } = useContext(LoaderContext);
  const { data } = useContext(FlagsContext);
  const { cardNum } = useParams();

  return (
    <>
      <section className="card-details py-5">
        <div className="centralized-container m-auto py-4">
          <div className="mb-5 pb-4">
          <BackBtn></BackBtn>
          </div>
          
          <div className="row m-0 mt-4 gap-5" id="cardContent">
            {isLoading ? (
              <>
              <CardDetailsLoader/>
              </>
            ) : (
              <>
                <CardDetailsImage
                  imageSource={data[cardNum].flags.svg}></CardDetailsImage>
                <CardDetailsBody data={data[cardNum]}></CardDetailsBody>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FlagDetailsContainer;
