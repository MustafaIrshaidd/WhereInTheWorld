import React from "react";
import styles from "./styles.module.css";

const CardDetailsLoader = () => {
  return (
    <>
      <div className="row m-0 mt-4 gap-5" id="cardContent">
        <div
          className={`${styles["loader"]} card-image col-md-5 p-0 overflow-hidden text-center me-3 rounded-2 py-5`}>
          <div className={`${styles["image-loader--height"]} w-100`} />
        </div>

        <div className="card-body col-md-5 d-flex flex-column justify-content-evenly">
          <h5 className={`${styles["loader"]} pb-4 pt-3 rounded-2 w-50`} />

          <ul className={`${styles["loader"]} py-5 my-3 rounded-2 w-75`}>
            <div className="p-0 my-5 w-100" />
          </ul>

          <aside className={`${styles["loader"]} rounded-2 w-100`}>
            <div className="p-0 my-5 w-100" />
          </aside>
        </div>
      </div>
    </>
  );
};

export default CardDetailsLoader;
