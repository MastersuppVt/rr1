import img from "./color.png";
import Char from "./ItemDetail";
import React,{useContext} from "react";
import { CartContext, CartState } from "./CartContext";
const CartWidget = () => {
const [char, setChar] = useContext(CartContext);
const [krt, setKrt]= useContext(CartState)
    return (
        <>
            <img class="logo" src={img} alt="icono mastersupp" title="Icono"></img>
            <p class="logo">{krt.length}</p>
            
            {krt.length === 0 ? (
                <p>Carrito vacio...</p>
            ) : (
                krt.map((char) => (
                    <Char
                        key={char.char_id+1}
                        char={char}
                        cart={krt}
                        setCart={setKrt}
                    />
                ))
            )}
        </>

    )

};
export default CartWidget;