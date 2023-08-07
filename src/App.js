import "./assets/Global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import CountryDetailsPage from "./pages/CountryDetails";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

import CountriesProvider from "./contexts/CountriesContext";
import CountriesFilterProvider from "./contexts/CountriesFilterContext";
import CountryDetailsProvider from "./contexts/CountryDetailsContext";
import LoaderProvider from "./contexts/LoaderContext";
import FavCountriesProvider from "./contexts/FavCountriesContext";

function App() {
  return (
    <LoaderProvider>
      <Navbar />
      <Routes>
        <Route element={<FavCountriesProvider />}>
          <Route element={<CountriesProvider />}>
            <Route element={<CountriesFilterProvider />}>
              <Route path="" element={<HomePage />}></Route>
            </Route>
          </Route>
          <Route element={<CountryDetailsProvider />}>
            <Route
              path="/flag-details/:countryName"
              element={<CountryDetailsPage />}></Route>
          </Route>
        </Route>
        <Route
          path="*"
          element={<NotFound content={"Page Not Found !"} />}></Route>
      </Routes>
    </LoaderProvider>
  );
}

export default App;
