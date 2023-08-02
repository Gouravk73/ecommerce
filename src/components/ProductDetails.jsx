import React from 'react'
import { useParams } from 'react-router-dom';
import ProductArray from './ProductArray';

const ProductDetails = () => {
    const { producttitle } = useParams();

    // Find the product with the given title from the ProductArray
    const product = ProductArray.find(
      (product) => product.title === decodeURIComponent(producttitle)
    );
  console.log(product)
    if (!product) {
      return <div>Product not found!</div>;
    }
  
    return (
        < >
            <div>
                <h2>{product.title}</h2>
                <img src={product.imageUrl} alt={product.title} style={{ maxWidth: '300px' }} />
                <p>Price: {product.price}</p>
            </div>
            <div className='container align-items-left text-center'>
                <h1>Review</h1> 
                    <div className='row'>product name is :{product.title}</div>
                    <div className='row'>product price is :{product.price}</div>
                    <div className='row'>product name is :{product.title}</div>
                    <div className='row text-right'>Lorem ipsum dolor sit amet, ipsum dolor ipsums sass sit amet, cons sit amet, cons consectetur adipisicing elit. Reprehenderit, veritatis. Quo ad iure et similique sit possimus maxime molestiae, quod nesciunt natus aliquid, quibusdam cum, ratione ullam dolore impeearum. </div>
 

            </div>
        </>
    );
}

export default ProductDetails