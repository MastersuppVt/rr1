import "./NavBar.css";
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Item from "./Item";
import ItemListContainer from "./ItemListContainer";
import { CartContext, CartState } from "./CartContext";
import img from "./assets/color.png"
const NavBar = ({ cart, setCart }) => {

  const [products, setProducts] = useContext(CartContext)
  const [cartItems, setCartItems,num,setNum] = useContext(CartState);
  return (

    <nav>
      <div class="barra" id="barra">

        <a href="#barra">
          <img class="logo" src={img} alt="icono mastersupp" title="Icono"></img>
        </a>
        <CartWidget countCartItems={num} />
        <div class="menu" id="close">
          <Link to="/">
            Inicio
          </Link>
          {products.map((cat) => {
            return (

              <div>
                <Link to={`/category/${cat.category}`}>
                  {cat.category}
                </Link>

              </div>
            );
          })}
          {/* 
          <NavLink to="/"> INICIO </NavLink>
          <NavLink to="/contact"> CONTACTO </NavLink>
          <NavLink to="/media"> MEDIA </NavLink>
          <NavLink to="/news"> NOTICIAS </NavLink>
          <NavLink to="/donate"> DONAR </NavLink> */}
          <a href="#close" id="cerrar">CERRAR</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;