import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import ItemOnCart from "../ItemOnCart/ItemOnCart";

export default function Cart() {
  const { cart, getCartTotal, removeFromCart } = useContext(CartContext);
  console.log(cart.length);

  return (
    <>
      {cart.length ? (
        <div>
          {cart.map((e) => (
            <ItemOnCart key={e.id} item={e} />
          ))}
          <h2>Total: ${getCartTotal()}</h2>
        </div>
      ) : (
        <div>
          <h2>No hay productos</h2>
          <Link to="/">
            <button>Ir a productos</button>
          </Link>
        </div>
      )}
    </>
  );
}
