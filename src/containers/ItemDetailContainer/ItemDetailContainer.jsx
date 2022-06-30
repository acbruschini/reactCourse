import React, { useState, useEffect } from "react";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProducto = doc(db, "productos", id);
    getDoc(queryProducto).then((resp) =>
      setItem({ id: resp.id, ...resp.data() })
    );
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("/assets/data.json").then((resp) => {
  //       resp.json().then((data) => {
  //         setitem(data.find((e) => e.id == id));
  //         console.log(item);
  //       });
  //     });
  //   }, 500);
  // }, []);

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
