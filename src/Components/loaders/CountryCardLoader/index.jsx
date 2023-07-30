import React from "react";
import styles from "./styles.module.css";

const CountryCardLoader = () => {
  return (
    <>
      <div className="col-10 col-md-4 mb-5 rounded-2">
        <a
          href="#"
          className="card overflow-hidden shadow-sm border-0">
          <div
            className={`${styles['card-image']} img-fluid w-100 ${styles['loader']}`}
          />

          <div className={`${styles['card-body--bg']} p-4`}>
            <h5 className={`card-title ${styles['loader']} py-3 mb-2 rounded-2`} />
            <ul className="p-0 mt-3">
              <li className={`py-2 my-2 ${styles['loader']} w-75 rounded-2`}>
                <span />
              </li>
              <li className={`py-2 my-2 ${styles['loader']} w-75 rounded-2`}>
                <span />
              </li>
              <li className={`py-2 my-2 ${styles['loader']} w-75 rounded-2`}>
                <span />
              </li>
            </ul>
          </div>
        </a>
      </div>
    </>
  );
};

export default CountryCardLoader;
