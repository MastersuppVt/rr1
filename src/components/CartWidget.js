import img from "./color.png";
import Char from "./ItemDetail";
import React, { useContext, useState } from "react";
import { CartContext, CartState } from "./CartContext";
import Icount from "./ItemCount";
import { Link } from "react-router-dom";
const CartWidget = (props) => {

    return (

        <>

            <a href="#barra">
            <img class="logo" src={img} alt="icono mastersupp" title="Icono"></img>
            </a>
               <Link to="/cart">
                <div class="logo">
                    {' '}
                    {props.countCartItems ? (
                        <button className="badge">{props.countCartItems}</button>
                    ) : (
                        ''
                    )}
                </div>
                </Link> 
            



        </>

    )

};
export default CartWidget;