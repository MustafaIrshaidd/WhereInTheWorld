import React, { useContext } from "react";
import { createContext } from "react";
import useFetch from "../hooks/usefetch";
import { Outlet } from "react-router-dom";
import { LoaderContext } from "./LoaderContext";

export const FlagsContext = createContext();

const FlagsProvider = ({ children }) => {
  const { isLoading, startLoader, stopLoader } = useContext(LoaderContext);

  const { data, error } = useFetch(
    "https://restcountries.com/v3.1/all?fields=true&fields=name,flags,region,capital,population"
  );

  data ? stopLoader() : startLoader();

  return (
    <>
      <FlagsContext.Provider value={{ data, error }}>
        {children || <Outlet />}
      </FlagsContext.Provider>
    </>
  );
};

export default FlagsProvider;
