import React, { useState, useEffect } from "react";

export const ItemDetail = ({ item }) => {
  return (
    <div className="row">
      <div className="col-md-6 mt-5">
        <img src={item.imagen_tienda} alt="" className="w-50 m-5" />
      </div>
      <div className="col-md-6 mt-5">
        <div className="row mt-5">
          <h2>{item.titulo}</h2>
          <h6 dangerouslySetInnerHTML={{ __html: item.texto }}/>
          <h4>${item.precio}</h4>
        </div>
      </div>
    </div>
  );
};
