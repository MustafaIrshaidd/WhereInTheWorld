import React from "react";
import styles from "./styles.module.css";
import LinkBtn from "../../../../Components/forms/LinkBtn";
import {
    formatNum_EN_IN,
    arrToString,
    currenciesToString,
  } from "../../../../utils/formatters";
  import NotFound from "../../../../Components/NotFound";

const CountryDetailsCard = ({ data }) => {
  return (
    <>
      <div
        className={`${styles["card-image"]} col-md-5 p-0 overflow-hidden text-center me-3 shadow-sm`}>
        <img
          className={`${styles["card-image--cover"]} w-100`}
          src={data?.flags.svg}
          alt="image not found"
        />
      </div>

      <div className="card-body col-md-5 d-flex flex-column justify-content-evenly">
        <h5 className={`${styles["card-title"]} fw-bold fs-4 pb-4 pt-3`}>
          {data.name.official}
        </h5>
        <ul
          className={`${styles["card-body-details"]} d-flex flex-column flex-md-row gap-4 justify-content-start align-items-start p-0 pb-3`}>
          <div className="col">
            <li className="py-2">
              Population:
              <span> {formatNum_EN_IN(data?.population)}</span>
            </li>
            <li className="py-2">
              Region:
              <span> {data?.region}</span>
            </li>
            <li className="py-2">
              Sub Region:
              <span> {data?.subregion || <NotFound />}</span>
            </li>
            <li className="py-2">
              Capital:
              <span> {arrToString(data?.capital) || <NotFound />}</span>
            </li>
          </div>
          <div className="col-md-6">
            <li className="py-2">
              Top Level Domain:
              <span> {data?.tld[0]}</span>
            </li>
            <li className="py-2">
              Currencies:{" "}
              <span>
                {" "}
                {currenciesToString(data?.currencies) || <NotFound />}
              </span>
            </li>
            <li className="py-2">
              Languages:
              <span> {arrToString(data?.languages) || <NotFound />}</span>
            </li>
          </div>
        </ul>
        <aside
          className={`${styles["border-countries"]} d-flex flex-column flex-md-row justify-content-start align-items-md-center`}>
          <h5 className="m-0 me-3 col-12 col-md-4 col-lg-3 col-xl-2 d-inline-block">
            Border Countries:
          </h5>
          <div className="border-countries-links col-md row justify-content-between justify-content-md-start align-items-center p-0 my-4 text-center">
            {typeof data?.borders !== "undefined" ? (
              data.borders.map((border) => (
                <LinkBtn to="/" title={border} key={border} />
              ))
            ) : (
              <NotFound />
            )}
          </div>
        </aside>
      </div>
    </>
  );
};

export default CountryDetailsCard;
