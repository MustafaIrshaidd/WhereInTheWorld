import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const FlagCard = ({ data }) => {
    return (
        <>
            <div className="col-10 col-md-4 mb-5 position-relative">
                <Link
                    aria-label={data.index}
                    to={`card-details.html?card=${data.index}`}
                    className={`${styles['card-hover--scale-down']} card overflow-hidden shadow-sm border-0 rounded-2`}
                    draggable="true"
                    id={data.countryCommonName}
                >
                    <img className="img-fluid w-100" src={data.countryImageSource} alt="image not found" />
                    <div className={`${styles['card-body--bg']} p-4`}>
                        <h5 className="card-title">{data.countryCommonName}</h5>
                        <ul className="p-0 pt-2">
                            <li>Population: <span>${data.countryPopulation}</span></li>
                            <li>Region: <span>{data.countryRegion}</span></li>
                            <li>Capital: <span>{data.countryCapital}</span></li>
                        </ul>
                    </div>
                </Link>
                {data.isFavourite ? (
                    <i className={`fa-solid fa-star ${styles['color-favourite']}`} />
                ) : (
                    <i className="fa-solid fa-star" />
                )}
            </div>
        </>
    );
};

export default FlagCard;