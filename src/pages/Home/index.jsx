import React, { useState } from "react";

import FlagsContainer from "../../Components/FlagsContainer";
import FlagsFilter from "../../Components/FlagsFilter";

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
        <FlagsContainer filterValue={filterValue} />
      </main>
    </>
  );
};

export default HomePage;
