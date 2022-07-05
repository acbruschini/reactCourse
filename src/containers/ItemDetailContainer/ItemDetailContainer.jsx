import React, { useState, useEffect } from "react";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import { Navigate, useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, "productos", id);
    getDoc(queryProduct)
      .then((resp) => {
        console.log(resp);
        // IF NO ID _DOCUMENT WILL BE NULL
        if (resp._document !== null) {
          setItem({ id: resp.id, ...resp.data() });
        } else {
          throw resp;
        }
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  // EARLY RETURN IF ID IS NOT RETRIEVED.
  if (error) {
    return <Navigate to="./" />;
  }

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
