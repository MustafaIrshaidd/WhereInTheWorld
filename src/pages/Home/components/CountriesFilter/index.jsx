import React, { useContext } from "react";
import styles from "./styles.module.css";

import SearchBar from "../../../../components/forms/SearchBar";
import DropdownMenu from "../../../../components/forms/DropdownMenu";
import { CountriesFilterContext } from "../../../../contexts/CountriesFilterContext";

const FlagsFilter = () => {
  // send Filter Values to Context
  const { setFilterBy } = useContext(CountriesFilterContext);

  const onFilterChange = (key, value) => {
    setFilterBy((prevState) => ({ ...prevState, [key]: value }));
  };

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
