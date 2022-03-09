
import './App.css';
import VendingMachine from './VendingMachine';
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/soda" element={<Soda />} />
            <Route path="/chips" element={<Chips />} />
            <Route path="/sardines" element={<Sardines />} />
        </Routes>
        
      </BrowserRouter>
     
    </div>
  );
}

export default App;
