import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import BusinessCard from "./Pages/BusinessCard/BusinessCard";
import Error from "./Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/business-card">Business Card</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="business-card" element={<BusinessCard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
