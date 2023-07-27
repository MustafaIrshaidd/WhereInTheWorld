import "./assets/Global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import FlagDetailsPage from "./pages/FlagDetails";
import NotFound from "./Components/NotFound";

import FlagsProvider from "./contexts/FlagsContext";
import Navbar from "./Components/Navbar";
import LoaderProvider from "./contexts/LoaderContext";

function App() {
  return (
    <LoaderProvider>
      <Navbar />
      <Routes>
        <Route element={<FlagsProvider />}>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/flag-details/:countryName" element={<FlagDetailsPage />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </LoaderProvider>
  );
}

export default App;
