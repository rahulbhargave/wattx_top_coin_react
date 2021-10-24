import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header:React.FC = ()=>{
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand data-testid="header" href="#home">Crypto-Watch</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link data-testid="homeNav" as={Link} to="/home">Home</Nav.Link>
              <Nav.Link data-testid="liqNav" as={Link} to="/liquidity">Liquidity</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header;