import "./assets/Global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import HomePage from "./pages/Home";
import FlagDetailsPage from "./pages/FlagDetails";

import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/flag-details" element={<FlagDetailsPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
