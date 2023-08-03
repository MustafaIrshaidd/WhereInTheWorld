import React, { useState } from "react";

import HomePageContainer from "./components/HomePageContainer";
import CountriesFilter from "./components/CountriesFilter";

const HomePage = () => {
  const [filterBy, setFilterBy] = useState({
    searchQuery: "",
    filterType: "",
  });

  const handleFilterChange = (key, value) => {
    setFilterBy((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <>
      <main>
        <CountriesFilter onFilterChange={handleFilterChange} />
        <HomePageContainer filterBy={filterBy} />
      </main>
    </>
  );
};

export default HomePage;
