import React from 'react'
import styles from './styles.module.css'

const FlagFavourite = ({imgSrc,countryName}) => {
  return (
    <>
      <div className={`${styles['flag-content']} me-1 rounded-2 d-flex justify-content-between align-items-center`}>
        <div className="col-9 d-flex align-items-center justify-content-start gap-2">
          <img className="rounded-2" src={imgSrc} height="35px" width="53px" alt="notfound" />
          <h5 className="fs-6 mb-0">{countryName}</h5>
        </div>
        <div className="col-2 d-flex justify-content-center">
          <a href="#" className={`${styles['delete-btn']} d-flex justify-content-center align-items-center rounded-circle position-relative`}>
          </a>
        </div>
      </div>
    </>
  )
}

export default FlagFavourite