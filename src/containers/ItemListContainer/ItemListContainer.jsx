import React, { useState, useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoria } = useParams();
  const [cargando, setCargando] = useState(true);

  console.log("CATEGORIA: " + categoria);

  useEffect(() => {
    if (categoria) {
      setTimeout(() => {
        fetch("/assets/data.json")
          .then((resp) => resp.json())
          .then((data) =>
            setItems(data.filter((e) => e.categoria === categoria))
          )
          .then(setCargando(false));
      }, 2000);
    } else {
      setTimeout(() => {
        fetch("/assets/data.json")
          .then((resp) => resp.json())
          .then((data) => setItems(data))
          .then(setCargando(false));
      }, 2000);
    }
  }, [categoria]);

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {cargando ? <h2>Cargando...</h2> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
