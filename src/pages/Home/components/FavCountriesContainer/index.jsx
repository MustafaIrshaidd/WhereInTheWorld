import React, { useContext } from "react";
import styles from "./styles.module.css";

import FavCountry from "../FavCountry";

import { FavCountriesContext } from "../../../../contexts/FavCountriesContext";
import {
  addItemToObject,
  removeItemFromObject,
} from "../../../../utils/objectUtils";

const FavCountriesContainer = () => {
  // setFavouriteCountries in local storage by context
  const { favCountries, setFavCountries } = useContext(FavCountriesContext);

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

    const countryName = tempElement.querySelector("h5").innerHTML;
    const imgSource = tempElement.querySelector("img").getAttribute("src");

    if (favCountries.hasOwnProperty(countryName)) {
      return;
    }

    // Update the state with the new favCountry
    setFavCountries(
      addItemToObject(favCountries, countryName, { imgSrc: imgSource })
    );
  };

  // Delete favCountry From Local Storage

  const deleteFavCountryFromLocalStorage = (countryName) => {
    setFavCountries(removeItemFromObject(favCountries, countryName));
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
            {favCountries &&
              Object.keys(favCountries).map((countryName) => (
                <FavCountry
                  key={countryName}
                  imgSrc={favCountries[countryName].imgSrc}
                  countryName={countryName}
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
