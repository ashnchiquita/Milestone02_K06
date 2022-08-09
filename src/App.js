import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Kelas from "./components/Kelas";
import Profil from "./components/Profil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
