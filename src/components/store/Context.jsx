import { createContext } from "react";

const CartContext=createContext({
    items:[],
    addItems:(item)=>{},
    removeItems:(item)=>{},
})

export default CartContext;