import "./App.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Kelas from "./components/Kelas";
import Latihan from "./components/Latihan";
import Profil from "./components/Profil";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jawabanbenar from "./components/Jawabanbenar";
import Jawabansalaha from "./components/Jawabansalaha";
import Jawabansalahb from "./components/Jawabansalahb";
import Jawabansalahc from "./components/Jawabansalahc";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Container> */} {/* dihapus karena kalo pake ini jadi gak bisa full width */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/latihan" element={<Latihan />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jawabanbenar" element={<Jawabanbenar />} />
          <Route path="/jawabansalaha" element={<Jawabansalaha />} />
          <Route path="/jawabansalahb" element={<Jawabansalahb />} />
          <Route path="/jawabansalahc" element={<Jawabansalahc />} />
        </Routes>
      {/* </Container> */}
    </Router>
  );
}

export default App;
