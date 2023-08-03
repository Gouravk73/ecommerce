import React, { useContext, useEffect, useState } from 'react'
import CartContext from './store/Context'
import LoginContext from './store/LoginContext';

const Cart = ({ isCartOpen, handleCartToggle }) => {
   const cart =useContext(CartContext);
    const loginCtx=useContext(LoginContext)

   useEffect(() => {
     fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(`https://crudcrud.com/api/00107a305d544825af9013e048a15784/${loginCtx.email}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data from API.');
      }
      const data = await response.json();
       console.error(data);
    } catch (error) {
      console.error(error.message);
    }
  };
   let total =0;
   cart.items.forEach((item) => {total= total+Number(item.price)*Number(item.quantity)}
   );

   return (
    < div className={`collapse collapse-horizontal${isCartOpen ? ' show' : ''}`}>
        <h1 style={{textAlign:'center'}}>CART</h1>

        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ITEM</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">QUANTITY</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            cart.items.map((product,index)=>{
                                return(<tr key={index}>
                                    <th scope="col">{product.title}</th>
                                    <th scope="col">{product.price}</th>
                                    <th scope="col">
                                        <div className='container-fluid'>
                                            {product.quantity} 
                                            <button onClick={()=>cart.removeItems(product)} className="btn btn-danger">Remove</button> 
                                        </div>
                                    </th>
                                </tr>)
                            })
                        }
                    </tbody>
            </table>
            <h2 style={{textAlign:'right'}}>${total}</h2>
        </div>
        <div className="d-flex justify-content-end">
            <button  className='btn btn-info'>PURCHASE</button>
        </div> 
        </div> 
  )
}

export default Cart