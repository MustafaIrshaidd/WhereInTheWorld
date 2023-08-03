import React from "react";
import { Outlet } from "react-router-dom";
import countriesProvider from "../../contexts/CountriesContext";

const Layout = () => {
  return (
    <>
      <countriesProvider>
        <Outlet />
      </countriesProvider>
    </>
  );
};

export default Layout;
