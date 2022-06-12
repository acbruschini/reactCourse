import React, { useState, useEffect } from 'react';


export const ItemDetail = ({item}) => {

    return (
        <>
            <div>Titulo: {item.titulo}</div>
            <div>Texto: {item.texto}</div>
            <div>Precio: ${item.precio}</div>
            <img src={'https://www.qualityartworks.com.ar/wp-content/uploads/re/re0'+item.id+'/'+item.imagen_tienda} alt={item.titulo} />
            
        </>
    )
}
