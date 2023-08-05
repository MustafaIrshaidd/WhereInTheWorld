import React from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";


const BackButton = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <Link
        className={`${styles['back-button']} py-1 ps-5 pe-4 d-inline-block position-relative rounded-2 shadow-sm`}
        onClick={handleGoBack}
        to="#"
      >
        Back
      </Link>
    </>
  );
};

export default BackButton;
