import React from 'react';
import styles from './styles.module.css';

const DropdownMenu = ({ width, placeholder, options }) => {
  return (
    <>
      <div className={`${styles.dropdown} dropdown rounded-2 ${width}`}>
        <button className={`${styles.btn} dropdown-toggle text-start shadow-sm w-100 border-0 position-relative py-3 ps-4 text-start`} type="button" id="dropdown-menu" data-bs-toggle="dropdown" aria-expanded="false">
          {placeholder}
        </button>
        <ul className={`${styles['regions-dropdown--btns']} dropdown-menu w-100 shadow-sm mt-1 border-0`} aria-labelledby="dropdown-menu">

          {
            options.map((option) => (
              <li>
                <button className="dropdown-item ps-4" type="button" value={option}>
                  {option}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;