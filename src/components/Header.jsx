import React, { useContext, useEffect, useState } from 'react'
import { Badge, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import LoginContext from './store/LoginContext';
import CartContext from './store/Context';
const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const[totalItem,setTotalItem] = useState(0);
  const cart =useContext(CartContext);
  const loginCntxt =useContext(LoginContext);
  useEffect(() => {
    let totalQuantity=0;
    cart.items.forEach((item)=>{
      totalQuantity+= Number(item.quantity);
    })
    setTotalItem(totalQuantity);
  }, [cart.items]);

  const handleCartToggle = () => {
    setIsCartOpen((prevValue) => !prevValue);
  };
  const logoutHandler=()=>{
    loginCntxt.logout();
  }
  return (
    <>
     <Navbar bg="black" data-bs-theme="dark">
        <div className='container   d-flex justify-content-between '> 
          <div className="col align-self-start">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
              <Nav.Link as={Link} to={'/store'}>Store</Nav.Link>
              <Nav.Link  as={Link} to={'/about'}>About</Nav.Link>
              <Nav.Link  as={Link} to={'/contact'}>Contact</Nav.Link>

            </Nav>
          </div>
          <nav className=' col col-p-2'>
            <Button variant="primary" onClick={handleCartToggle}>
              <Nav.Link >Profile
                <Badge bg="secondary">{totalItem}</Badge>
                <span className="visually-hidden"></span>
              </Nav.Link>
          </Button>
          {!loginCntxt.isLoggedIn&&<Button>
                <Nav.Link as={Link} to={'/login'} >Login</Nav.Link>
              </Button>}
              {loginCntxt.isLoggedIn&&<Button onClick={logoutHandler}>
                <Nav.Link as={Link} to={'/login'} >Logout</Nav.Link>
              </Button>}
           </nav>
          
        </div>
      </Navbar>
      <Cart isCartOpen={isCartOpen} />

    
    </>
  )
}

export default Header