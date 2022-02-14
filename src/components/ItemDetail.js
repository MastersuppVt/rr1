import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemDetail = () => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(1);
    const [producto, setProducto] = useState(1);
    useEffect(() => {
        itemCount(Number(prompt("stock")), Number(prompt("inicial")))
        return () => {
            console.log("hi")
        };
    }, []);

    function itemCount(stock, inicial, onAdd) {
        var n1 = stock;
        var n2 = inicial;
        setStock(n1)
        setProducto(n2)
    }
    const onAdd = () => {

        if (counter <= stock) {
            setProducto(producto + counter)
            setStock(stock - counter)
            setCounter(0);
        }
    }
    const quitar = () => {
        if (producto > 0 && (producto - counter) >= 0) {
            setProducto(producto - counter)
            setStock(stock + counter)
            setCounter(0);
        }
    }
    const handlerCounterUp = () => {
        if (counter < stock || producto > stock) {
            setCounter(counter + 1);
        }
    };

    const handlerCounterDown = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }

    };

    const [characters, setCharacters] = useState([])
    let id = useParams().id;
    useEffect(() => {
        axios(`https://www.breakingbadapi.com/api/characters/${id}`).then((res) => setCharacters(res.data))
    }, [id]);
    return (
        <div>
            <div className='CounterSection'>
                <p>Counter: {counter}</p>
                <p>producto: {producto}</p>
                <p>stock: {stock}</p>
                <div className='btn-section'>

                    <button onClick={onAdd}>Añadir</button>
                    <button onClick={quitar}>quitar</button>
                    <button onClick={handlerCounterUp}>Incrementar</button>
                    <button onClick={handlerCounterDown}>Decrementar</button>

                </div>
            </div>
            {
                characters.map((char) => {
                    return (
                        <div>
                            <h1>hola</h1>
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