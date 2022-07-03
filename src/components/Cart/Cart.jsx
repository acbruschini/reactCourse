import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { ReactDOM } from "react";
import { useState, useRef } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import ItemOnCart from "../ItemOnCart/ItemOnCart";
import OrderForm from "../OrderForm/OrderForm";

export default function Cart() {
  const { cart, getCartTotal, removeFromCart, clearCart } =
    useContext(CartContext);
  const [orderPlacedId, setOrderPlacedId] = useState(null);

  const generateOrder = (e) => {
    e.preventDefault();
    let buyer = {
      name: e.target.userName.value,
      phone: e.target.userPhone.value,
      email: e.target.userEmail.value,
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
          <OrderForm onSubmit={generateOrder} />
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
