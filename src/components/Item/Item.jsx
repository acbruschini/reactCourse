import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div className="col-md-4 p-1">
      <div className="card w-100 mt-5">
        <div className="card-header">{`${item.titulo} - ${item.categoria}`}</div>
        <div className="card-body">
          <img src={item.imagen_tienda} alt="" className="w-50" />
        </div>
        <div className="card-footer">
          <Link to={"/detalle/" + item.id}>
            <button className="btn btn-outline-primary btn-block">
              detalle del producto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
