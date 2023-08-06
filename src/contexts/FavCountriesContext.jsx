import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const FavCountriesContext = createContext();

const FavCountriesProvider = ({ children }) => {
  const [favCountries, setFavCountries] = useLocalStorage("favCountries", {});

  return (
    <FavCountriesContext.Provider value={{ favCountries, setFavCountries }}>
      {children || <Outlet />}
    </FavCountriesContext.Provider>
  );
};

export default FavCountriesProvider;
