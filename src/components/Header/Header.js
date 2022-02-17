import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './header.css'
import Logo from '../../images/logo.png'

export default function Header() {
  return (
    <div >
      <Navbar bg="light" expand="lg">
        <Container className='navbarContainer'>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Brand className='firstBrand' href="#home">
                <img className='logo' src={Logo} alt="" />
              </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto headerNav">
            
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#benefits">Benefits</Nav.Link>
              <Navbar.Brand className='midBrand' href="#home">
                <img className='logo' src={Logo} alt="" />
              </Navbar.Brand>
              <Nav.Link href="#roadmap">Roadmap</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
              <Nav.Link href="#faq">Faq</Nav.Link>
              <Button>Game Page</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
