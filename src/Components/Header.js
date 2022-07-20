import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          
          <img src='https://tse2.mm.bing.net/th?id=OIP.MZlvK-3DATZtLkuqFiE9JwHaKC&pid=Api&P=0' width={70} height={90}></img>
          <Nav className="me-auto">
          &nbsp;
            <Nav.Link href="#home">Home</Nav.Link>
            &nbsp;
            <Nav.Link href="#article">Informasi</Nav.Link>
            &nbsp;
            <Nav.Link href="#dokumen">Profil</Nav.Link>
            &nbsp;
            <Nav.Link href="#imagegallery">Struktur Organisasi</Nav.Link>
            &nbsp;
            <Nav.Link href="#instansi">Program Beguwai Jejamow</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;