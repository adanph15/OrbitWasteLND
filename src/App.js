
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Hazards from './pages/hazards/Hazards';
import Solutions from './pages/solutions/Solutions';
import News from './pages/news/News';
import Starship from './pages/starship/Starship';
import "./Main.css";
import Privacity from './pages/privacity/Privacity';
import News1 from './pages/allnews/News1';
import News2 from './pages/allnews/News2';
import News3 from './pages/allnews/News3';
import News4 from './pages/allnews/News4';
import News5 from './pages/allnews/News5';

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
            <Route path="/privacity" element={<Privacity />}/>
            <Route path="/news1" element={<News1 />}/>
            <Route path="/news2" element={<News2 />}/>
            <Route path="/news3" element={<News3 />}/>
            <Route path="/news4" element={<News4 />}/>
            <Route path="/news5" element={<News5 />}/>
          </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;

