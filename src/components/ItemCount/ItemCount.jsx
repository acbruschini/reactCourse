import React, { useState } from "react";

export default function ItemCount ({stockInit, initial, onAdd}) {
    const [stock, setStock] = useState(stockInit);
    const [count, setCount] = useState(initial);

    function add (){
        count < stock ? setCount(count + 1) : null;
    }

    function subs (){
        count > initial ? setCount(count - 1) : null;
    }

    return (
        <>
            <button onClick={subs}>-</button>
            <h1>{count}</h1>
            <button onClick={add}>+</button>
            <button onClick={() => onAdd(count)}>Add to Cart</button>
        </>
    )
}