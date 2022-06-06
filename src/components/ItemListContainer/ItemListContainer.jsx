import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import onAdd from '../../helpers/onAdd';

export const ItemListContainer = (props) => {
    const { greeting} = props;
  return (
    <>
      <h1>{greeting}</h1>
      <ItemCount stockInit={5} initial={1} onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer;
