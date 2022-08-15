import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">LearnIt!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/kelas">Kelas</Nav.Link>
            <Nav.Link href="/latihan">Latihan</Nav.Link>
            <Nav.Link href="/tantangan">Tantangan</Nav.Link>
            <Nav.Link href="/profil">Profil</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
