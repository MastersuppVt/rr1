import { useState } from "react";
import ItemDetail from "./ItemDetail";
import obj1 from "./assets/directo1.jpg"
import obj2 from "./assets/directo2.jpg"
import obj3 from "./assets/directo3.jpg"
import obj4 from "./assets/directo4.jpg"
import close from "./assets/close.png"
import "./items.css"

const ItemDetailContainer = () => {
    const [mostrar, setMostrar] = useState("nMostrar")
    window.addEventListener("load",function Mostar() {

        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("pMostrar");
                console.log("cargado")
            }, 2000)
        })
        getItem.then((menssage) => setMostrar(menssage))

    }
    )
    function Ocultar() {

        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("nMostrar");
                console.log(mostrar)
            }, 2000)
        })
        getItem.then((menssage) => setMostrar(menssage))

    }
    const [items, setItem] = useState([
        { id: "I1", nombre: "obj1", precio: 100, img: "https://via.placeholder.com/150", imgP: obj1 },
        { id: "I2", nombre: "obj2", precio: 100, img: "https://via.placeholder.com/150", imgP: obj2 },
        { id: "I3", nombre: "obj3", precio: 100, img: "https://via.placeholder.com/150", imgP: obj3 },
        { id: "I4", nombre: "obj4", precio: 100, img: "https://via.placeholder.com/150", imgP: obj4 }
    ])
    console.log(items)
    return (
        <>
            <div className={mostrar}>
                {/* <a href="#close"><img src={close} className="closeBtm"></img></a> */}
                {items.map((item) => (
                    <ItemDetail
                        key={item.id}
                        item={item}
                        items={items}
                    />

                ))}
            </div>

        </>
    )
}
export default ItemDetailContainer
