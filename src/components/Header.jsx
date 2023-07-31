import React, { useContext, useEffect, useState } from 'react'
import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import CartContext from './store/Context';
const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const[totalItem,setTotalItem] = useState(0);
  const cart =useContext(CartContext);
  useEffect(() => {
    setTotalItem(cart.items.length);
  }, [cart.items]);

  const handleCartToggle = () => {
    setIsCartOpen((prevValue) => !prevValue);
  };
  return (
    <>
     <Navbar bg="black" data-bs-theme="dark">
        <Container> 
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/store'}>Store</Nav.Link>
            <Nav.Link  as={Link} to={'/about'}>About</Nav.Link>

          </Nav>
          <Button variant="primary" onClick={handleCartToggle}>
            <Nav.Link >Profile
              <Badge bg="secondary">{totalItem}</Badge>
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