import React from 'react'
import styles from './styles.module.css'

import SearchBar from '../SearchBar';
import DropdownMenu from '../DropdownMenu';


const FlagsFilter = () => {

    const dropdownOptions = ['No Filter', 'Favourites', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    return (
        <>
            <section className={styles['form-section']}>
                <form className="centralized-container m-auto d-md-flex justify-content-md-between align-items-md-center py-5" onsubmit="return false;">
                    <SearchBar width="col-12 col-md-6" placeholder="Search for a country..."></SearchBar>
                    <DropdownMenu width="col-7 col-md-3 col-lg-2" placeholder="Filter By" options={dropdownOptions}></DropdownMenu>
                </form>
            </section>
        </>
    )
}

export default FlagsFilter