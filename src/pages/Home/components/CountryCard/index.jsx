import React, { useRef } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { formatNum_EN_IN } from "../../../../utils/countriesUtils";

const CountryCard = ({ data, index, isFavourite, onDragStart }) => {
  const cardRef = useRef(null);

  const handleDragStart = (ev) => {
    onDragStart(ev);
  };

  return (
    <>
      <div className="col-10 col-md-4 mb-5 position-relative rounded-2">
        <Link
          aria-label={index}
          to={`flag-details/${data.name.official}`}
          className={`${styles["card-hover--scale-down"]} card overflow-hidden shadow-sm border-0`}
          draggable="true"
          ref={cardRef}
          onDragStart={handleDragStart}
          id={data.name.common}>
          <img
            className="img-fluid w-100"
            src={data.flags.svg}
            alt="image not found"
          />
          <div className={`${styles["card-body--bg"]} p-4`}>
            <h5 className="card-title">{data.name.common}</h5>
            <ul className="p-0 pt-2">
              <li>
                Population: <span>{formatNum_EN_IN(data.population)}</span>
              </li>
              <li>
                Region: <span>{data.region}</span>
              </li>
              <li>
                Capital: <span>{data.capital}</span>
              </li>
            </ul>
          </div>
        </Link>

        {isFavourite ? (
          <i
            className={
              styles["color-favourite"] +
              " " +
              styles["fav-star-visiblity"] +
              " fa-solid fa-star"
            }
          />
        ) : (
          <i className={styles["fav-star-visiblity"] + " fa-solid fa-star"} />
        )}
      </div>
    </>
  );
};

export default CountryCard;
