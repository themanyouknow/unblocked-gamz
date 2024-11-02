import "./App.css";
import Game from "./components/game/Game.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/game/:name" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
