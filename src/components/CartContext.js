import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import ItemListContainer from './ItemListContainer';
import data from './data';
// 1 - CREAR EL CONTEXTO
export const CartContext = createContext();
export const CartState = createContext();
// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)
export const CartStateProvider =({children})=>{
	
	const [cartItems, setCartItems] = useState([]);
    return (
		<CartState.Provider value={[cartItems, setCartItems]}>
			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
			{children}
		</CartState.Provider>
	);
}
export const CartProvider = ({ children }) => {

    const [char, setChar] = useState([]);
   
    useEffect(() => {
        axios("https://www.breakingbadapi.com/api/characters").then((res) => setChar(res.data))
    });
	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER

	return (
		<CartContext.Provider value={[char, setChar]}>
			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
			{children}
		</CartContext.Provider>
	);
};
