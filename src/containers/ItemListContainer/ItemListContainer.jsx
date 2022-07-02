import React, { useState, useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "productos");
    const queryCollectionFiltered = categoria
      ? query(queryCollection, where("categoria", "==", categoria))
      : queryCollection;

    getDocs(queryCollectionFiltered)
      .then((resp) =>
        setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => alert(err))
      .finally(setCargando(false));
  }, [categoria]);

  console.log(items);

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {cargando ? <h2>Cargando...</h2> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
