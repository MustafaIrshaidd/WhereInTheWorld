import React from "react";
import styles from "./styles.module.css";

const NotFound = ({ content }) => {
  return (
    <>
      {content ? (
        <div
          className={`${styles["notfound"]} d-flex flex-column gap-5 justify-content-center align-items-center`}>
          <p className={`text-start`}>{content}</p>
        </div>
      ) : (
        <>
          <span className={`text-start`}>NotFound...</span>
        </>
      )}
    </>
  );
};

export default NotFound;
