import React from "react";
import styles from "./styles.module.css";

import FavCountry from "../FavCountry"
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { doesKeyExist } from "../../../../utils/verifyKeyExistance";

const FavCountriesContainer = () => {
  const [favoriteFlags, setFavoriteFlags] = useLocalStorage(
    "favouriteFlags",
    {}
  );

  const allowDropOnFavouriteFlags = (ev) => {
    ev.preventDefault();
  };

  // Drop Funtionallity on Favourite FLags Section

  const dropOnFavouriteFlags = (ev) => {
    ev.preventDefault();

    var serializedElement = ev.dataTransfer.getData("text/html");

    const tempElement = document.createElement("div");
    tempElement.innerHTML = serializedElement;

    const flagTitle = tempElement.querySelector("h5").innerHTML;
    const flagSource = tempElement.querySelector("img").getAttribute("src");

    if (doesKeyExist(favoriteFlags, flagTitle)) {
      return;
    }

    // Update the state with the new favorite flag
    setFavoriteFlags((prevFlags) => ({
      ...prevFlags,
      [flagTitle]: { imgSrc: flagSource, countryName: flagTitle },
    }));
  };

  const extractFromLocalStorage = (ev) => {
    const countryName = ev.target
      .closest(".flag-content")
      .querySelector("h5").innerHTML;

    const updatedObj = Object.fromEntries(
      Object.entries(favoriteFlags).filter(([key]) => key !== countryName)
    );

    setFavoriteFlags(updatedObj);
  };
  return (
    <>
      <section
        className={`${styles["favourites"]} col-3 rounded-2 p-0 d-none d-md-block shadow-sm`}>
        <div className="container">
          <h5 className="py-4">Favourites</h5>
          <div
            className={`${styles["content"]} content my-3 d-flex flex-column gap-3 scrollable-element overflow-y-auto`}
            id="favContent"
            onDrop={dropOnFavouriteFlags}
            onDragOver={allowDropOnFavouriteFlags}>
            {Object.keys(favoriteFlags).map((flagTitle) => (
              <FavCountry
                key={flagTitle}
                imgSrc={favoriteFlags[flagTitle].imgSrc}
                countryName={flagTitle}
                deleteMe={extractFromLocalStorage}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FavCountriesContainer;
