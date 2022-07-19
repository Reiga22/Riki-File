import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <img src='https://www.google.com/imgres?imgurl=http%3A%2F%2Fpancamulya.desa.id%2Fwp-content%2Fuploads%2Fsites%2F802%2F2019%2F12%2Fcropped-cropped-Logo-Kab-Tulang-bawang.png%3Fw%3D640&imgrefurl=http%3A%2F%2Fpancamulya.desa.id%2Fcropped-cropped-logo-kab-tulang-bawang-png%2F&tbnid=bDH6oh3bwzlJcM&vet=12ahUKEwj77cbLy4T5AhUWxHMBHfG5CkAQMygCegUIARDDAQ..i&docid=7jMb5tBPoKGEOM&w=512&h=512&q=logo%20tulang%20bawang&ved=2ahUKEwj77cbLy4T5AhUWxHMBHfG5CkAQMygCegUIARDDAQ'width={70} height={90}></img>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Informasi</Nav.Link>
            <NavDropdown title="Profil" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Struktur Organisasi
              </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;