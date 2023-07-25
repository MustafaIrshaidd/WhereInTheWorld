import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Navbar from './Components/Navbar';
import FlagsFilter from './Components/FlagsFilter';



function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <FlagsFilter></FlagsFilter>
      
    </div>
  );
}

export default App;
