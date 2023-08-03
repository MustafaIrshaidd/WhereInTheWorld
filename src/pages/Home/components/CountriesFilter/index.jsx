import React from "react";
import styles from "./styles.module.css";

import SearchBar from "../../../../Components/forms/SearchBar";
import DropdownMenu from "../../../../Components/forms/DropdownMenu";

const FlagsFilter = ({ onFilterChange }) => {

  // Constant Values for dropDownMenu

  const dropDownMenuOptions = [
    "Favourites",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  return (
    <>
      <section className={styles["form-section"]}>
        <form
          className="centralized-container m-auto d-md-flex justify-content-md-between align-items-md-center py-5"
          onSubmit={(e) => e.preventDefault()}>
          <SearchBar
            className="col-12 col-md-6"
            placeholder="Search for a country..."
            onKeyUp={(value) =>
              onFilterChange("searchQuery", value)
            }></SearchBar>
          <DropdownMenu
            className="col-7 col-md-3 col-lg-2"
            placeholder="Filter By"
            options={dropDownMenuOptions}
            onSelect={(value) =>
              onFilterChange("filterType", value)
            }></DropdownMenu>
        </form>
      </section>
    </>
  );
};

export default FlagsFilter;
