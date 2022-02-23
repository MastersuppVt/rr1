import { Fragment, useState,useContext } from "react";
import Item from "./Item";
import obj1 from "./assets/directo1.jpg"
import obj2 from "./assets/directo2.jpg"
import obj3 from "./assets/directo3.jpg"
import obj4 from "./assets/directo4.jpg"
import color from "./assets/color.png"
import "./items.css"
import ItemDetail from "./ItemDetail";
import ItemDetailContainer from "./ItemDetailContainer";
import { CartContext, CartState } from "./CartContext";
import { Link, useParams } from "react-router-dom";
import CardComponent from "./CardComponent";
const IList = () => {
    const [cartItems, setCartItems,num,setNum] = useContext(CartState)
    const [products] = useContext(CartContext);
    const [ver, setVer] = useState(true);
    const [characters, setCharacters] = useState([])
    let category = useParams().category;
    const result = products.filter(product => product.category == category)
    return (
        <>
           <div  className="block col-2 contenedor">
            {result.map((item) => (
                <CardComponent
                    key={item.id}
                    char={item} />
            ))}
            </div>
        </>
    );
}
export default IList;
