import React from "react";
import { Outlet } from "react-router-dom";
import FlagsProvider from "../../contexts/FlagsContext";

const Layout = () => {
  return (
    <>
      <FlagsProvider>
        <Outlet />
      </FlagsProvider>
    </>
  );
};

export default Layout;
