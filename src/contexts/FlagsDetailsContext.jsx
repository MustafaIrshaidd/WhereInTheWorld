// import React, { createContext } from 'react'

// export const FlagsDetailsContext = createContext();

// const FlagsDetailsProvider = ({children}) => {
//     const { isLoading, startLoader, stopLoader } = useContext(LoaderContext);

//     const { data, error } = useFetch(
//       `https://restcountries.com/v3.1/name/${}`
//     );
  
//     data ? stopLoader() : startLoader();

//   return (
//     <React.Fragment>
//         {children}
//     </React.Fragment>
//   )
// }

// export default FlagsDetailsContext