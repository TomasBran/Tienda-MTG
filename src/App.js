import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Greetings from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      <Navbar />

        <Greetings text={"Bienvenido a la tienda, próximamente se habilitará la compra"}/>
        <Greetings text={"Mientras, podés interactuar con la Navbar"}/>


    </div>
  );
}

export default App;
