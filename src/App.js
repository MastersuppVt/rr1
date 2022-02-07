
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import Icount from './components/ItemCount';
import Inicio from './components/pages/inicio';

const App = () => {
  return (
    <>
     
      <NavBar />
      <ItemListContainer />
    <Icount />
    </>
  );
};

export default App;
