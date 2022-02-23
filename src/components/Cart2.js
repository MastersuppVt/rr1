import { useContext, useEffect } from 'react';
import Main from './Main';
import Basket from './Basket';
import data from './data';
import { useState } from 'react';
import "./styles.css"
import CartWidget from './CartWidget';
import { CartContext, CartState } from './CartContext';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"
function Cart2({ children }) {
    const [products, setProducts] = useContext(CartContext)
    const [cartItems, setCartItems,num,setNum] = useContext(CartState);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setNum(num + 1)
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setNum(cartItems.length + 1)
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setNum(num - 1)
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setNum(num - 1)
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    const RemoveAll = () => {
        setNum(0)
        setCartItems([])
    }
    return (
        <div className="App">
            <CartWidget countCartItems={num} />
            <div className="row">
                <Main products={products} onAdd={onAdd}></Main>
                <Basket
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    Erase={RemoveAll}
                ></Basket>
            </div>
        </div>
    );
}

export default Cart2;
