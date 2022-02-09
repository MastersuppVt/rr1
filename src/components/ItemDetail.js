import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemDetail = () => {
    const [characters, setCharacters] = useState([])
    let id = useParams().id;
    useEffect(() => {
        axios(`https://www.breakingbadapi.com/api/characters/${id}`).then((res) => setCharacters(res.data))
    }, [id]);
    return (
        <div>
            {
                characters.map((char) => {
                    return (
                        <div>
                            <h1>{char.name}</h1>
                            <h2>{char.status}</h2>
                            <img src={char.img}></img>

                        </div>
                    );
                })
            }


        </div >
    )
}

export default ItemDetail;