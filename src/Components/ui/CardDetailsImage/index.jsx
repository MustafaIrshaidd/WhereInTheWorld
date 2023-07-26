import React from "react";

import styles from "./styles.module.css";

const CardDetailsImage = ({imageSource}) => {
  return (
    <>
      <div className={`${styles['card-image']} col-md-5 p-0 overflow-hidden text-center me-3 shadow-sm`}>
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
