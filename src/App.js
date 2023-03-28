import './App.css'
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import CardsContainer from './components/CardsContainer/CardsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardDetailContainer from './components/CardDetailContainer/CardDetailContainer';
import SearchDetailedItem from './components/Navbar/SearchBar';

function App() {
  
  

  return (
  
    <div className="App">

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/Tienda-MTG"  element={<CardsContainer greeting={"Bienvenido a la tienda"}/>}/>
          <Route path="/rarity/:rarityId" element={<CardsContainer greeting={"Categoria: "}/>}/>
          <Route path="/card/:cardId" element={<CardDetailContainer/>}/>
          <Route path="/card/search/:cardName" element={<SearchDetailedItem/>}/>
        </Routes>
      
      
      </BrowserRouter>
  
      


    </div>
  );
}

export default App;
