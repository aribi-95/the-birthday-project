import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CatchMikanGame from "./pages/CatchMikanGame";

export default function App() {
    return (
        <Router basename="/The-Birthday-Project">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/game">Play</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/game" element={<CatchMikanGame />} />
            </Routes>
        </Router>
    );
}
