
// React Rounter Dom 6.0.2 (4)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
import NavBar from "./components/NavBar";
import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from "./components/CartContainer";


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> 
         
          <Route path="/donate" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/media" element={<Media />} />
        */}
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
