import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import CardsContainer from './components/CardsContainer/CardsContainer';
import CardDetailContainer from './components/CardDetailContainer/CardDetailContainer';
import SearchDetailedItem from './components/Navbar/SearchBar';
import { CartProvider } from './context/CartContext';
import LanguageButtons from './components/Button/LanguageButtons/LanguageButtons';
import { LanguageProvider } from './context/LanguageContext';
import Cart from './components/Cart/Cart';



function App() {

  
  return (
  
    <div className="App">

      

            <BrowserRouter>
             <LanguageProvider>
              <CartProvider>
                <Navbar />
                <Routes>
                  <Route path="/Tienda-MTG"  element={<CardsContainer/>}/>
                  <Route path="/rarity/:rarityId" element={<CardsContainer/>}/>
                  <Route path="/card/:cardId" element={<CardDetailContainer/>}/>
                  <Route path="/card/search/:cardName" element={<SearchDetailedItem/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/checkout" element={<h1>Checkout</h1>}/>
                </Routes>
                <LanguageButtons/>
              </CartProvider>
             </LanguageProvider>
            
            </BrowserRouter>

  
    </div>
  );
}

export default App;
