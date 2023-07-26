import React from 'react'


import FlagCardLoader from '../loaders/FlagCardLoader'

const FlagCards = () => {

    const ob = {
        index:1,
        countryCommonName:"Palestine",
        countryImageSource:"/fds",
        countryPopulation:142142141,
        countryRegion:"Asia",
        countryCapital:"Jerusalem,Ramallah",
        isFavourite:true
    }
    return (
        <>
            <section className="col-12 col-md-9 card-section pb-1 rounded-2">
                <div className={`row justify-content-center justify-content-md-between scrollable-element`} id="cardsContent">
                    <FlagCardLoader></FlagCardLoader>
                    <FlagCardLoader></FlagCardLoader>
                    <FlagCardLoader></FlagCardLoader>
                    <FlagCardLoader></FlagCardLoader>
                    <FlagCardLoader></FlagCardLoader>
                    <FlagCardLoader></FlagCardLoader>
                </div>
            </section>
        </>
    )
}

export default FlagCards