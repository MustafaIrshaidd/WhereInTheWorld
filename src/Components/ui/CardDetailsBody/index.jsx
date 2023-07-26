import React from "react";

import styles from "./styles.module.css";
import LinkBtn from "../../forms/LinkBtn";

const CardDetailsBody = ({ data }) => {
  return (
    <>
      <div className="card-body col-md-5 d-flex flex-column justify-content-evenly my-5 py-5">
        <h5 className={`${styles['card-title']} fw-bold fs-4 pb-4 pt-3`}>
          {data.countryOfficialName}
        </h5>
        <ul className={`${styles['card-body-details']} d-flex flex-column flex-md-row gap-4 justify-content-start align-items-start p-0 pb-3`}>
          <div className="col">
            <li className="py-2">
              Population:
              <span>{data.population}</span>
            </li>
            <li className="py-2">
              Region: 
              <span>{data.Region}</span>
            </li>
            <li className="py-2">
              Sub Region: 
              <span>data.subRegion</span>
            </li>
            <li className="py-2">
              Capital: 
              <span>{data.capital}</span>
            </li>
          </div>
          <div className="col-md-6">
            <li className="py-2">
              Top Level Domain: 
              <span>{data.tId}</span>
            </li>
            <li className="py-2">
              Currencies: <span>{data.currencies}</span>
            </li>
            <li className="py-2">
              Languages: 
              <span>{data.languages}</span>
            </li>
          </div>
        </ul>
        <aside className={`${styles['border-countries']} d-flex flex-column flex-md-row justify-content-start align-items-md-center`}>
          <h5 className="m-0 me-4 d-inline-block">Border Countries:</h5>
          <div className="border-countries-links col-md row justify-content-between justify-content-md-start align-items-center p-0 my-4 text-center">
            
              <LinkBtn to="/" title="pal"></LinkBtn>
              <LinkBtn to="/" title="pal"></LinkBtn>
              <LinkBtn to="/" title="pal"></LinkBtn>
              <LinkBtn to="/" title="pal"></LinkBtn>
              <LinkBtn to="/" title="pal"></LinkBtn>

          </div>
        </aside>
      </div>
    </>
  );
};

export default CardDetailsBody;
