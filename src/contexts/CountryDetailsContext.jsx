import React, { createContext, useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import useFetch from "../hooks/usefetch";
import { LoaderContext } from "./LoaderContext";

export const CountryDetailsContext = createContext();

const CountryDetailsProvider = ({ children }) => {
  const { startLoader, stopLoader } = useContext(LoaderContext);

  // get countryName from params
  const { countryName } = useParams();

  const { data, error } = useFetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );

  data ? stopLoader() : startLoader();

  return (
    <CountryDetailsContext.Provider value={{ data, error }}>
      {children || <Outlet />}
    </CountryDetailsContext.Provider>
  );
};

export default CountryDetailsProvider;
