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
import CountryDetailsProvider from "./contexts/CountryDetailsContext";
import LoaderProvider from "./contexts/LoaderContext";

function App() {
  return (
    <LoaderProvider>
      <Navbar />
      <Routes>
        <Route element={<CountriesProvider />}>
          <Route path="" element={<HomePage />}></Route>
        </Route>
        <Route element={<CountryDetailsProvider />}>
          <Route
            path="/flag-details/:countryName"
            element={<CountryDetailsPage />}></Route>
        </Route>
        <Route
          path="*"
          element={<NotFound content={"Page Not Found !"} />}></Route>
      </Routes>
    </LoaderProvider>
  );
}

export default App;
