import React from 'react';
import Item from '../Item/Item';

export default function ItemList ({items}) {

    return (
        <>
            {items.map((e) => <Item key={e.id} item={e} /> )}
        </>

    )
}