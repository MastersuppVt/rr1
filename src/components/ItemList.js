import { Fragment, useState } from "react";
import Item from "./Item";
import obj1 from "./assets/directo1.jpg"
import obj2 from "./assets/directo2.jpg"
import obj3 from "./assets/directo3.jpg"
import obj4 from "./assets/directo4.jpg"
import color from "./assets/color.png"
import "./items.css"
import ItemDetail from "./ItemDetail";
import ItemDetailContainer from "./ItemDetailContainer";
const IList = () => {

    const [items, setItem] = useState([
        { id: "I1", nombre: "obj1", precio: 100, img: "https://via.placeholder.com/150",imgP:obj1 },
        { id: "I2", nombre: "obj2", precio: 100, img: "https://via.placeholder.com/150",imgP:obj2 },
        { id: "I3", nombre: "obj3", precio: 100, img: "https://via.placeholder.com/150",imgP:obj3 },
        { id: "I4", nombre: "obj4", precio: 100, img: "https://via.placeholder.com/150",imgP:obj4 }
    ])

    // mostrar = "lista";

    const [cart, setCart] = useState([])

    return (
        <>
            <h3>Lista</h3>
            {/* <button onClick={hola}>{mostrar}</button> */}
            <div>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        cart={cart}
                        setCart={setCart}
                        items={items}
                    />

                ))}
             <ItemDetailContainer />

            </div>

            {/* <button onClick={}>datos</button> */}
        </>
    );
}
export default IList;
