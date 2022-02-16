import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import { Link } from "react-router-dom";
import { CartContext, CartState } from "./CartContext";
import Char from "./ItemDetail";
const ItemListContainer = () => {
    const [characters, setCharacters] = useContext(CartContext);
    const [krt, setKrt]= useContext(CartState)
    return (
        <div className="secCinco">
            {characters.map((char) => (
              <Char
                key={char.char_id}
                char={char}
                cart={krt}
                setCart={setKrt}
                characters={characters}
              />
            ))}
        </div>
    )
}
export default ItemListContainer
