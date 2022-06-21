import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({children}) => {

    const [cart, setCart ] = useState([])

    const addToCart = (item) => {
        setCart([...cart,item])
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.find(e => e.id == id);
    }

    return (
        <CartContext.Provider value={{cart,addToCart,clear,isInCart}}>
            {children}
        </CartContext.Provider>
    )
}