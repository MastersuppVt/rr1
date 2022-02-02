import { Fragment, useState } from "react";
import Item from "./Item";
import "./items.css"
const IList = () => {
  
    const [items, setItem] = useState([
        { id: 1, nombre: "obj1", precio: 100 },
        { id: 2, nombre: "obj2", precio: 100 },
        { id: 3, nombre: "obj3", precio: 100 },
        { id: 4, nombre: "obj4", precio: 100 }
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
            </div>

            {/* <button onClick={}>datos</button> */}
        </>
    );
}
export default IList;
