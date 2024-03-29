import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BusinessCard from "./Pages/BusinessCard/BusinessCard";
import TravelJournal from "./Pages/TravelJournal/TravelJournal";
import MemeGenerator from "./Pages/MemeGenerator/MemeGenerator";
import TenziesGame from "./Pages/TenziesGame/TenziesGame";
import Error from "./Pages/Error/Error";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="allPages-nav">
        <Link to="/React-projects">| Home |</Link>
        <Link to="/business-card">| Business Card |</Link>
        <Link to="/travel-journal">| Travel Journal |</Link>
        <Link to="/meme-generator">| Meme Generator |</Link>
        <Link to="/tenzies-game">| Tenzies Game |</Link>
      </nav>
      <Routes>
        <Route path="/React-projects" element={<Home />} />
        <Route path="business-card" element={<BusinessCard />} />
        <Route path="travel-journal" element={<TravelJournal />} />
        <Route path="meme-generator" element={<MemeGenerator />} />
        <Route path="tenzies-game" element={<TenziesGame />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
