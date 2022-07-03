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
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "productos");
    const queryCollectionFiltered = category
      ? query(queryCollection, where("categoria", "==", category))
      : queryCollection;

    getDocs(queryCollectionFiltered)
      .then((resp) =>
        setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => alert(err))
      .finally(setLoading(false));
  }, [category]);

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {loading ? <h2>Cargando...</h2> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
