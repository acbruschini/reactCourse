import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const ItemDetail = ({ item }) => {
  const {cart, addToCart, isInCart} = useContext(CartContext)
  const [ cantidad, setCantidad ] = useState(null);

  function onAdd(cantidad) {
    isInCart(item.id) == undefined ? addToCart({...item, cantidad}) : null //NO PERMITE DUPLICADOS
    //setCantidad(cantidad);
  }

  console.log(cart)

  return (
    <div className="row">
      <div className="col-md-6 mt-5">
        <img src={item.imagen_tienda} alt="" className="w-50 m-5" />
      </div>
      <div className="col-md-6 mt-5">
        <div className="row mt-5">
          <h2>{item.titulo}</h2>
          <h6 dangerouslySetInnerHTML={{ __html: item.texto }} />
          <h4>${item.precio}</h4>
        </div>
      </div>
      <div className="col-md-6 mt-5">
        {
        cantidad ? 
        <Link to="/cart">
          <button>Ir al carrito</button>
        </Link>
        : 
          <ItemCount stockInit={10} initial={1} onAdd={onAdd} />
        }
      </div>
    </div>
  );
};
