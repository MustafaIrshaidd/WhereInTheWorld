import React, { useState, createContext } from "react";

export const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const startLoader = () => {
    setIsLoading(true);
    console.log("Test");
  };

  const stopLoader = () => {
      setIsLoading(false);
  };

  return (
    <LoaderContext.Provider value={{ isLoading, startLoader, stopLoader }}>
      {children}
      {isLoading}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
