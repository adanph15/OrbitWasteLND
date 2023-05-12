
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Hazards from './pages/hazards/Hazards';
import Solutions from './pages/solutions/Solutions';
import News from './pages/news/News';
import Starship from './pages/starship/Starship';
import "./Main.css";

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
            <Route path="/starship" element={<Starship />}/>
          </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;