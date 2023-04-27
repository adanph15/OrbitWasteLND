
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Hazards from './pages/hazards/Hazards';
import Solutions from './pages/solutions/Solutions';

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/hazards" element={<Hazards />}/>
            <Route path="/solutions" element={<Solutions />}/>
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;