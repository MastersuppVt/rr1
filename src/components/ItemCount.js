import React, { Component, useState, useEffect } from "react";

const Icount = () => {
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

        if (producto <= stock) {
            setProducto(producto + counter)
            setStock(stock - counter)
            setCounter(0);
        }
    }
    const quitar = () => {
        if (producto >0&&(producto - counter)>=0) {
            setProducto(producto - counter)
            setStock(stock + counter)
            setCounter(0);
        }
    }
    const handlerCounterUp = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    };

    const handlerCounterDown = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }

    };

    // const onClick = () => {
    //     alert('click');
    // };

    return (
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
    );

};
export default Icount;