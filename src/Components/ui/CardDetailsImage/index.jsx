import React from "react";

import styles from "./styles.module.css";

const CardDetailsImage = ({imageSource}) => {
  return (
    <>
      <div className="card-image col-md-5 p-0 overflow-hidden text-center me-3 shadow-sm my-5 py-5">
        <img
          className={`${styles['card-image--cover']} w-100`}
          src={imageSource}
          alt="image not found"
        />
      </div>
    </>
  );
};

export default CardDetailsImage;
