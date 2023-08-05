import React from "react";
import styles from "./styles.module.css";

import FavCountry from "../FavCountry";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";

const FavCountriesContainer = () => {
  // setFavouriteCountries in local storage as an empty array

  const [favoriteFlags, setFavoriteFlags] = useLocalStorage(
    "favouriteFlags",
    {}
  );

  // allow drop on FavCountriesContainer

  const allowDropOnFavouriteFlags = (ev) => {
    ev.preventDefault();
  };

  // Drop Funtionallity on FavCountriesContainer

  const dropOnFavouriteFlags = (ev) => {
    ev.preventDefault();

    var serializedElement = ev.dataTransfer.getData("text/html");

    const tempElement = document.createElement("div");
    tempElement.innerHTML = serializedElement;

    // extracting countryName and imgSource from DOM API

    const flagTitle = tempElement.querySelector("h5").innerHTML;
    const flagSource = tempElement.querySelector("img").getAttribute("src");

    if (favoriteFlags.hasOwnProperty(flagTitle)) {
      return;
    }

    // Update the state with the new favCountry

    setFavoriteFlags((prevFlags) => ({
      ...prevFlags,
      [flagTitle]: { imgSrc: flagSource, countryName: flagTitle },
    }));
  };

  // Delete favCountry From Local Storage

  const deleteFavCountryFromLocalStorage = (countryName) => {
    const updatedFavoriteFlags = { ...favoriteFlags };
    delete updatedFavoriteFlags[countryName];
    setFavoriteFlags(updatedFavoriteFlags);
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
                onDeleteState={(countryName) =>
                  deleteFavCountryFromLocalStorage(countryName)
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FavCountriesContainer;
