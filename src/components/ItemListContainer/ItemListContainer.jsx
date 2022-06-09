import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import onAdd from '../../helpers/onAdd';
import ItemList from '../ItemList/ItemList';

export const ItemListContainer = (props) => {
  const { greeting} = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("assets/data.json")
      .then(resp => { resp.json().then(data => { setItems(data)}) })
    },4000)
    
  },[])    
  return (
    <>
      <h1>{greeting}</h1>
      <ItemCount stockInit={5} initial={1} onAdd={onAdd}/>
      <ItemList items={items}/>
    </>
  )
}

export default ItemListContainer;
