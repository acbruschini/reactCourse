import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cantidad) => {
    let position = isInCart(item.id);
    if (Number.isInteger(position)) {
      cart[position].cantidad = cart[position].cantidad + cantidad;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  // WILL RETURN FALSE IF ID IS NOT FOUND, AND ARRAY BANK NUMBER WHEN ID IS IN THE ARRAY.
  const isInCart = (id) => {
    let returnPosition = cart.find((e) => e.id == id);
    return returnPosition == undefined
      ? false
      : parseInt(cart.findIndex((e) => e.id == id));
  };

  const getCartTotal = () => {
    const total = cart.reduce((acc, e) => {
      return acc + e.precio * e.cantidad;
    }, 0);
    return total;
  };

  const removeFromCart = (id) => {
    let index = isInCart(id);
    console.log("index:", index);
    if (index >= 0) {
      cart.splice(index, 1);
      setCart([...cart]);
    }
  };

  const getProductsTotal = () => {
    const total = cart.reduce((acc, e) => {
      return acc + e.cantidad;
    }, 0);
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        getCartTotal,
        removeFromCart,
        getProductsTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
