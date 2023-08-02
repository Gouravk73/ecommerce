import React, { useContext } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import ProductArray from'./ProductArray'
import CartContext from './store/Context.jsx'
import { Link } from 'react-router-dom';
const Store = () => {
  const cart =useContext(CartContext);
  const cartHandler=(item)=>{
    cart.addItems(item);
  }
  return (
    <div  >
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
            {console.log(encodeURIComponent(product.title),'dssd')}
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
    </div>
  )
}

export default Store;