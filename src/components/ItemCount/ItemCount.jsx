import React, { useState } from "react";

export default function ItemCount({ stockInit, initial, onAdd }) {
  const [stock, setStock] = useState(stockInit);
  const [count, setCount] = useState(initial);

  function handlePlus() {
    count < stock ? setCount(count + 1) : null;
  }

  function handleMinus() {
    count > initial ? setCount(count - 1) : null;
  }

  function handleAdd() {
    onAdd(count);
  }

  return (
    <>
      <button onClick={handleMinus}>-</button>
      <h1>{count}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleAdd}>Add to Cart</button>
    </>
  );
}
