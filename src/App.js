import "./App.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Kelas from "./components/Kelas";
import Latihan from "./components/Latihan";
import Profil from "./components/Profil";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/latihan" element={<Latihan />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
