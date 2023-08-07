import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const CountriesFilterContext = createContext();

const CountriesFilterProvider = ({ children }) => {
  const [filterBy, setFilterBy] = useState({
    searchQuery: "",
    filterType: "",
  });

  return (
    <CountriesFilterContext.Provider value={{ filterBy, setFilterBy }}>
      {children || <Outlet />}
    </CountriesFilterContext.Provider>
  );
};

export default CountriesFilterProvider;
