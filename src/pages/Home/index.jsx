import React, { useState } from "react";

import HomePageContainer from "./components/HomePageContainer";
import FlagsFilter from "./components/FlagsFilter";

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
        <FlagsFilter onFilterChange={handleFilterChange} />
        <HomePageContainer filterValue={filterValue} />
      </main>
    </>
  );
};

export default HomePage;
