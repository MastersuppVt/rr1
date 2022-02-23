
// React Rounter Dom 6.0.2 (4)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
// Views
import Home from "./components/pages/inicio";
import About from "./components/pages/donate";
import Contact from "./components/pages/contacto";
import Media from "./components/pages/media";
import News from "./components/pages/news"
import ItemListContainer from "./components/ItemListContainer";

/*
1.Crear nuestras pages (o views)
2.Importar los componentes de react-router-dom(BrowserRouter, Route, Routes)
3.Envolver nuestra App con el HOC BrowserRouter (alias Router)
4.Implementar las rutas con el componente Route y pasarle los componentes
5.Envolver todos nuestros <Route> dentro de <Routes>
6.Para nuestros links utilizamos el componente Link
*/

// Component
import {db} from "./firebase/firebaseConfig"
import NavBar from "./components/NavBar";
import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from "./components/CartContainer";
import { CartContext, CartProvider, CartStateProvider } from "./components/CartContext";
import ShoppingCart from "./components/ShoppingCart";
import Cart2 from "./components/Cart2";
import Basket from "./components/Basket";
import "./components/style/styles.css"
import IList from "./components/ItemList";
const App = () => {

  return (

    <Router>
      <CartStateProvider>
        <CartProvider >

          <div className="App">
        
            <Routes>
              <Route path="/" element={<Cart2 />} />
              <Route path="/cart" element={<Basket />} />
              <Route path="/donate" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/media" element={<Media />} />


              <Route path="/category/:category" element={<IList />} />
              <Route path="/producto/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
            </Routes>
            <NavBar />
          </div>

        </CartProvider>
      </CartStateProvider>
    </Router>

  );
};

export default App;
