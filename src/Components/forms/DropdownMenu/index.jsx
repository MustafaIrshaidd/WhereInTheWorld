import React, { useState } from "react";
import styles from "./styles.module.css";

const DropdownMenu = ({ className, placeholder, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const handleSelectedOption = (event) => {
    const { tagName } = event.target;
    if (tagName === "BUTTON") {
      setSelectedOption(event.target.innerText);
      onSelect(event.target.value);
    }
  };
  return (
    <>
      <div className={`${styles["dropdown--container"]} dropdown rounded-2 ${className}`}>
        <button
          className={`${styles["dropdown--btn"]} dropdown-toggle text-start shadow-sm w-100 border-0 position-relative py-3 ps-4 text-start`}
          type="button"
          id="dropdown-menu"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          {selectedOption}
        </button>
        <ul
          className={`${styles["filterby-dropdown--btns"]} dropdown-menu w-100 shadow-sm mt-1 border-0`}
          aria-labelledby="dropdown-menu"
          onClick={handleSelectedOption}>
          <li>
            <button className="dropdown-item ps-4" type="button" value="">
              No Filter
            </button>
          </li>
          {options.map((option) => (
            <li>
              <button
                className="dropdown-item ps-4"
                type="button"
                value={option}>
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
