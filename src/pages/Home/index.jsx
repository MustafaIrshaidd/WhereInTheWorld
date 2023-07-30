import React, { useState } from "react";

import HomePageContainer from "./components/HomePageContainer";
import CountriesFilter from "./components/CountriesFilter";

const HomePage = () => {
  const [filterValue, setFilterValue] = useState({
    searchValue: "",
    selectedOption: "",
  });

  const handleFilterChange = (key, value) => {
    setFilterValue((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <>
      <main>
        <CountriesFilter onFilterChange={handleFilterChange} />
        <HomePageContainer filterValue={filterValue} />
      </main>
    </>
  );
};

export default HomePage;
