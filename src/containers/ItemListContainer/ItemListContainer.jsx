import React, { useState, useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();
  const [cargando, setCargando] = useState(true);

  console.log("CATEGORIA: " + categoria);

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "productos");
    if (categoria) {
      const queryCollectionFiltered = query(
        queryCollection,
        where("categoria", "==", categoria)
      );
      getDocs(queryCollectionFiltered)
        .then((resp) =>
          setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
        )
        .catch((err) => alert(err))
        .finally(setCargando(false));
    } else {
      getDocs(queryCollection)
        .then((resp) =>
          setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
        )
        .catch((err) => alert(err))
        .finally(setCargando(false));
    }
  }, [categoria]);

  // useEffect(() => {
  //   if (categoria) {
  //     setTimeout(() => {
  //       fetch("/assets/data.json")
  //         .then((resp) => resp.json())
  //         .then((data) =>
  //           setItems(data.filter((e) => e.categoria === categoria))
  //         )
  //         .then(setCargando(false));
  //     }, 2000);
  //   } else {
  //     setTimeout(() => {
  //       fetch("/assets/data.json")
  //         .then((resp) => resp.json())
  //         .then((data) => setItems(data))
  //         .then(setCargando(false));
  //     }, 2000);
  //   }
  // }, [categoria]);

  // UN ITEM/PRODUCTO
  // useEffect(() => {
  //   const db = getFirestore();
  //   const queryProducto = doc(db, "productos", "SYMecinL2WMTloQ7E4XS");
  //   getDoc(queryProducto).then((resp) =>
  //     setItems({ id: resp.id, ...resp.data() })
  //   );
  // }, []);

  // useEffect(() => {
  //   const db = getFirestore();
  //   const queryCollection = collection(db, "productos");
  //   getDocs(queryCollection)
  //     .then((resp) =>
  //       setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
  //     )
  //     .catch((err) => alert(err))
  //     .finally(setCargando(false));
  // }, [categoria]);

  console.log(items);

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {cargando ? <h2>Cargando...</h2> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
