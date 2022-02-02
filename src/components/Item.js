import React,{Component, useState} from "react";
import ("./items.css")

const Item = ({ item, cart, setCart, items }) => {
    const [mostrar, setMostrar]=useState("lista")
    const ver =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("mostrarLista");
            console.log(mostrar)
        },2000)
    })

ver.then((menssage)=>setMostrar(menssage))
    const { nombre, precio, id } = item;
    return (
        <div className={mostrar}>
            <ul>
                <li>
                    <p>id:{id}</p>

                </li>
                <li>
                    <p>nombre:{nombre}</p>

                </li>
                <li>
                    <p>precio:{precio}</p>

                </li>
            </ul>
        </div>
    )
}

export default Item;