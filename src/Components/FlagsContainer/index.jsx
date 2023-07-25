import React from 'react'

import FavFlags from '../FavFlags'
import FlagCards from '../FlagCards'

const FlagsContainer = () => {
    return (
        <>
            <div class="centralized-container m-auto">
                <div class="row justify-content-center m-0">
                    <FavFlags></FavFlags>
                    <FlagCards></FlagCards>
                </div>
            </div>
        </>
    )
}

export default FlagsContainer