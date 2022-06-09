import React from 'react';

export default function Item({item}){
    return (
        <div>
            <h2>{item.titulo}</h2>
            {/* <p>{item.texto}</p> */}
            <p dangerouslySetInnerHTML={ {__html: item.texto} }></p>
            <h4>${item.precio}</h4>
        </div>
    )

}