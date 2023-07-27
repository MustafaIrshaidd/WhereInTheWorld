import React, { useState } from "react";
import styles from "./styles.module.css";

import FavFlag from "../ui/FavFlag";

const FavFlags = () => {
  const allowDropOnFavouriteFlags = (ev) => {
    ev.preventDefault();
  };

  // Drop Funtionallity on Favourite FLags Section

  const [favoriteFlags, setFavoriteFlags] = useState([]);

  const dropOnFavouriteFlags = (ev) => {
    ev.preventDefault();

    var serializedElement = ev.dataTransfer.getData("text/html");

    const tempElement = document.createElement("div");
    tempElement.innerHTML = serializedElement;

    const flagTitle = tempElement.querySelector("h5").innerHTML;
    const flagSource = tempElement.querySelector("img").getAttribute("src");

    // Update the state with the new favorite flag
    setFavoriteFlags((prevFlags) => [
      ...prevFlags,
      { imgSrc: flagSource, countryName: flagTitle },
    ]);
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
            {favoriteFlags.map((flag) => (
              <FavFlag
                imgSrc={flag.imgSrc}
                countryName={flag.countryName}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FavFlags;
