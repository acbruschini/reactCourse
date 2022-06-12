import React, {useState, useEffect} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {
    
    const [item, setitem] = useState ({});

    useEffect(() => {
        setTimeout(() => {
            fetch("assets/data.json")
                .then(resp => { resp.json().then(data => {
                    setitem(data.find(e => e.id == '953'))
                    console.log(item);
                })
            })
        },8000)
    },[])

    return (
        <>
            {Object.entries(item).length === 0 ? <h1>Cargando Detalle...</h1> : <ItemDetail item={item}/>}
        </>
    )
}