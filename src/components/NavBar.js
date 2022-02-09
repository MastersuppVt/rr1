import "./NavBar.css";
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
import ItemListContainer from "./ItemListContainer";
const NavBar = () => {
  const [category, setCategory] = useState([
    { name: "characters", url: "https://www.breakingbadapi.com/api/characters" },
    { name: "episodes", url: "https://www.breakingbadapi.com/api/episodes" },
    { name: "quotes", url: "https://www.breakingbadapi.com/api/quotes" },
    { name: "deaths", url: "https://www.breakingbadapi.com/api/deaths" }
  ]

  )
  ItemListContainer(category);
  
  return (

    <nav>
      <div class="barra" id="barra">
        <a href="#barra">
          <CartWidget />
        </a>

        <div class="menu" id="close">
          <Link to="/">
            Inicio
          </Link>
          {category.map((cat) => {
            return (
              
              <div>
                <Link to={`/category/${cat.name}`}>
                  {cat.name}
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