import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import ProductArray from'./ProductArray'
const Home = () => {
  return (
    <div  >
        <Container fluid style={{backgroundColor:'grey',width:'100%'}}>
        <h1 className="display-1 text-center">Home</h1>
      </Container>
      <h3 className="display-0 text-center">Music</h3>
      <Container fluid>
      <Row style={{ padding:'5rem ',margin: '0 10rem'  ,justifyContent:'center' ,alignItems:'center'}}>
     {
        ProductArray.map((product, index) => ( 
        <Card style={{   width: '18rem',margin: '20px' }}>
        <Card.Title style={{textAlign:'center'}}>{product.title}</Card.Title>

      <Card.Img variant="top" src= {product.imageUrl} />
      <Card.Body>
        <Card.Text style={{display:'flex', justifyContent:'space-between'}}>
           {product.price}
        <Button variant="primary">Add to cart</Button>

        </Card.Text>
      </Card.Body>
    </Card> 
        ))
     }
     </Row>
      </Container>
    </div>
  )
}

export default Home