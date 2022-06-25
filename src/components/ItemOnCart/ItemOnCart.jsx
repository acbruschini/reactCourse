import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ItemOnCart = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="col-md-4 p-1">
      <div className="card w-100 mt-5">
        <div className="card-header">{`${item.titulo} - ${item.categoria}`}</div>
        <div className="card-body">
          <img src={item.imagen_tienda} alt="" className="w-50" />
        </div>
        <div className="card-footer">
          <div>
            Cantidad: {item.cantidad} - Precio detalle: $
            {item.precio * item.cantidad}
          </div>
          <button
            onClick={() => handleRemove(item.id)}
            className="btn btn-outline-primary btn-block"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemOnCart;
