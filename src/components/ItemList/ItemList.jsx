import React from 'react';
import Item from '../Item/Item';

export default function ItemList ({items}) {

    return (
        <div>
            {items.length == 0 ? "Cargando" : items.map((e) => <Item key={e.id} item={e} /> )}
        </div>
    )
}