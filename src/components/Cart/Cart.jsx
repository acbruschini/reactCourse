import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import ItemOnCart from "../ItemOnCart/ItemOnCart";

export default function Cart() {
  const { cart, getCartTotal, removeFromCart, clearCart } =
    useContext(CartContext);
  const [orderPlacedId, setOrderPlacedId] = useState(null);
  console.log(cart.length);

  const generateOrder = () => {
    let buyer = {
      name: "Ariel",
      phone: "456665574",
      email: "ariel@sitiodeariel.com.ar",
    };
    let items = cart.map((item) => {
      return { id: item.id, title: item.titulo, price: item.precio };
    });
    let total = getCartTotal();
    let order = { buyer, items, total };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((resp) => {
      clearCart();
      setOrderPlacedId(resp.id);
    });
  };

  return (
    <>
      {cart.length ? (
        <>
          <div>
            {cart.map((e) => (
              <ItemOnCart key={e.id} item={e} removeFromCart={removeFromCart} />
            ))}
            <h2>Total: ${getCartTotal()}</h2>
          </div>
          <div>
            <button onClick={generateOrder}>Generar Orden</button>
          </div>
        </>
      ) : (
        <div>
          {orderPlacedId && (
            <h2>El id de su ultima compra es: {orderPlacedId}</h2>
          )}
          <h2>No hay productos</h2>
          <Link to="/">
            <button>Ir a productos</button>
          </Link>
        </div>
      )}
    </>
  );
}
