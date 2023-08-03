import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import ProductArray from'./ProductArray'
import CartContext from './store/Context.jsx'
import { Link } from 'react-router-dom';
import LoginContext from './store/LoginContext';
  const Store = () => {
  const cart =useContext(CartContext);
  const loginCtx=useContext(LoginContext);

  const addToApi=async(item)=>{
    console.log(item)
     try {
      const response = await fetch(`https://crudcrud.com/api/00107a305d544825af9013e048a15784/${loginCtx.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error('Failed to add data.');
      }

      // Data added successfully, do something here if needed.
    } catch (error) {
      console.error(error.message);
    }

  }
  const cartHandler=(item)=>{
  cart.addItems(item);
  console.log(cart.items)
  addToApi(item);
  }
 
  return (
    <div>
    { <div  >
      <Container fluid style={{backgroundColor:'grey',width:'100%'}}>
        <h1 className="display-1 text-center">Home</h1>
      </Container>
      <h3 className="display-0 text-center">Music</h3>
      <Container   >
      <Row className='row-cols-lg-2 row--cols-md-1 gy-5 '    >
     {
        ProductArray.map((product, index) => (
        <Col key={index}    >
          <Card style={{   width: '20rem' }}>
            <Card.Title style={{textAlign:'center'}}>{product.title}</Card.Title>
            <Link to={`/store/${encodeURIComponent(product.title)}`}> 
            {/* {console.log(encodeURIComponent(product.title),'dssd')} */}
              <Card.Img variant="top" src= {product.imageUrl} />
            </Link>
            <Card.Body>
              <Card.Text style={{display:'flex', justifyContent:'space-between'}}>
            {product.price}
              <Button variant="primary" onClick={()=>cartHandler(product)} >Add to cart</Button>
              </Card.Text>
            </Card.Body>
          </Card> 
          </Col>
        ))
     }
     </Row>
      </Container>
    </div>}
    </div>
  )
}

export default Store;