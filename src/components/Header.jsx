import React, { useState } from 'react'
import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cart from './Cart';
const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // State to control cart visibility
  const handleCartToggle = () => {
    setIsCartOpen((prevValue) => !prevValue);
  };
  return (
    <>
     <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/store'}>Store</Nav.Link>
            <Nav.Link  as={Link} to={'/about'}>About</Nav.Link>

          </Nav>
          <Button variant="primary" onClick={handleCartToggle}>
            <Nav.Link >Profile
              <Badge bg="secondary">9</Badge>
              <span className="visually-hidden"></span>
            </Nav.Link>
        </Button>
        </Container>
      </Navbar> 
      <Cart isCartOpen={isCartOpen} />

    
    </>
  )
}

export default Header