import React from 'react'
import styles from './styles.module.css'

const Navbar = () => {
    return (
        <>
            <input className={styles["dark-mode-btn"]} type="checkbox" name="dark-mode-toggle" id="dark-mode-toggle" />

            <header className="shadow-sm">
                <div className="centralized-container m-auto d-flex justify-content-between align-items-center py-4">

                    <h1 className="m-0">Where in the world?</h1>
                </div>
            </header>
        </>
    )
}

export default Navbar