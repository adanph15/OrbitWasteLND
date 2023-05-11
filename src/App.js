
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Hazards from './pages/hazards/Hazards';
import Solutions from './pages/solutions/Solutions';
import News from './pages/news/News';
import "./Main.css";
import Map from './pages/map/Map';
function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/hazards" element={<Hazards />}/>
            <Route path="/solutions" element={<Solutions />}/>
            <Route path="/news" element={<News />}/>
            <Route path="/map" element={<Map />}/>
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;