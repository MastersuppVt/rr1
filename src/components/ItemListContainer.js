import React, { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import { Link } from "react-router-dom";
const ItemListContainer = () => {
    const [characters, setCharacters] = useState([])
    
    useEffect(() => {
        axios("https://www.breakingbadapi.com/api/characters").then((res) => setCharacters(res.data))
    });
    return (
        <div className="secCinco">
            {characters.map((char) => {
                return (
                    <div>
                        <Link to={`/producto/${char.char_id}`}>
                            <CardComponent data={char} />
                        </Link>

                    </div>
                );
            })}
        </div>
    )
}
export default ItemListContainer
