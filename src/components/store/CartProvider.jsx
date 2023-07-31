import React, { useState } from 'react'
import CartContext from './Context'

const CartProvider = (props) => {
    const [items,setItems] =useState([]);
    const addItemToCartHandler=(item)=>{
      const existingItems=items.findIndex((cartItem)=> cartItem.title===item.title);
      if(existingItems!==-1){ 
         
        const updatedItems=[...items];
        updatedItems[existingItems].quantity= Number(updatedItems[existingItems].quantity)+1;
        setItems(updatedItems)
      }
      else setItems((prevItems) => [...prevItems,{ ...item, quantity: 1 }]);
    };
    const removeItemToCartHandler=(item)=>{
      const existingItems=items.findIndex((cartItem)=> cartItem.title===item.title);
      console.log("yes",existingItems,item);
      if(existingItems!==-1){
  

        const updatedItems=[...items];
        updatedItems.splice(existingItems,1);
        setItems(updatedItems);

      }

    } 
    const cartContext={
        items:items,
        addItems: addItemToCartHandler,
        removeItems:removeItemToCartHandler,
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;