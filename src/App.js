import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Navbar from './Components/Navbar';
import FlagsFilter from './Components/FlagsFilter';
import FlagsContainer from './Components/FlagsContainer';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <FlagsFilter></FlagsFilter>
        <FlagsContainer></FlagsContainer>
      </main>
    </>
  );
}

export default App;
