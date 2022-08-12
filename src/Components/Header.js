import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
    <Navbar bg="light" variant="light" expand="lg">
     <Navbar bg="light" variant="light" expand="lg">
        <Container>
        <Navbar.Brand>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/LOGO_KABUPATEN_TULANG_BAWANG.png" width={70} height={60}></img>
          <text className="ps-2">LAMPUNG TIMUR</text>
        </Navbar.Brand>
        </Container>
      </Navbar>
     <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Nav className="me-auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav.Link as={Link} to="/">Beranda</Nav.Link>
            <Nav.Link as={Link} to="/Berita">Berita</Nav.Link>
            <Nav.Link as={Link} to="/Artikel">Artikel</Nav.Link>
            <Nav.Link as={Link} to="/Dokumen">Dokumen</Nav.Link>
            <NavDropdown title="Galeri" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/Foto'>Foto</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Vidio'>Vidio</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/HalamanStatis">Halaman Statis</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </Navbar>
    </>
    );
}

export default Header;