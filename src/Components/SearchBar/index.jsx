import React from 'react'
import styles from './styles.module.css'

const SearchBar = ({ width, placeholder }) => {
    return (
        <>
            <div className={styles["search-input"] + " shadow-sm position-relative rounded-2 " + width}>
                <input
                    class="w-100 py-3 px-5"
                    type="search"
                    id="searchForCountryInput"
                    placeholder={placeholder}
                />
                <i className="fa-solid fa-magnifying-glass" />
            </div>
        </>
    )
}

export default SearchBar