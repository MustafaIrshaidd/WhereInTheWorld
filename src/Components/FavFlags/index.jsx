import React from 'react'
import styles from './styles.module.css'

import FlagFavourite from '../FavFlag'

const FlagsFavourite = () => {
    return (
        <>
            <section className={`${styles['favourites']} col-3 rounded-2 p-0 d-none d-md-block shadow-sm`}>
                <div className="container">
                    <h5 className="py-4">Favourites</h5>
                    <div className={`${styles['content']} my-3 d-flex flex-column gap-3 scrollable-element overflow-y-auto`} id="favContent" >
                        <FlagFavourite imgSrc='/imgsource' countryName='Palestine'></FlagFavourite>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FlagsFavourite