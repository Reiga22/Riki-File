import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';
import mesuji from './image/mesuji.png';
import {Link} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";

function Header() {
  return (
    <Navbar  bg="dark" variant='dark' expand="lg" className="justify-content-end flex-grow-1 pe-3">
      <div className='nav container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <img 
        src={mesuji}
         width={65}
         height={65}>
        </img>

        <Navbar.Collapse id="basic-navbar-nav justify-content-end">
          <Nav className="justify-content-start flex-grow-1 pe-3">
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
        </Navbar.Collapse>
        </div>
    </Navbar>
  );
}

export default Header;