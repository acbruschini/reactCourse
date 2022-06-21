import React, { useState, useEffect } from "react";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [item, setitem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch("/assets/data.json").then((resp) => {
        resp.json().then((data) => {
          setitem(data.find((e) => e.id == id));
          console.log(item);
        });
      });
    }, 500);
  }, []);

  return (
    <>
      {Object.entries(item).length === 0 ? (
        <h1>Cargando Detalle...</h1>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
};

