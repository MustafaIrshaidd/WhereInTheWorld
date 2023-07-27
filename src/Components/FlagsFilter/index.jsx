import React from "react";
import styles from "./styles.module.css";

import SearchBar from "../forms/SearchBar";
import DropdownMenu from "../forms/DropdownMenu";

const FlagsFilter = ({ onFilterChange }) => {
  return (
    <>
      <section className={styles["form-section"]}>
        <form
          className="centralized-container m-auto d-md-flex justify-content-md-between align-items-md-center py-5"
          onSubmit={(e) => e.preventDefault()}>
          <SearchBar
            width="col-12 col-md-6"
            placeholder="Search for a country..."
            onKeyUp={(value) =>
              onFilterChange("searchValue", value)
            }></SearchBar>
          <DropdownMenu
            width="col-7 col-md-3 col-lg-2"
            placeholder="Filter By"
            options={[
              "Favourites",
              "Africa",
              "Americas",
              "Asia",
              "Europe",
              "Oceania",
            ]}
            onSelect={(value) =>
              onFilterChange("selectedOption", value)
            }></DropdownMenu>
        </form>
      </section>
    </>
  );
};

export default FlagsFilter;
