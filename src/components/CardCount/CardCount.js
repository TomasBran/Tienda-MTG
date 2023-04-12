import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CardCount.css'
import { useCart } from '../../context/CartContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from '../../context/LanguageContext';

const ItemCount = ({stock = 0, initial = 1, onAdd, id})=> {

    const { isSpanishActive } = useLanguage();

    const { removeCard } = useCart()

   const [quantity, setQuantity] = useState(initial)


   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
       else{
        toast.warning(isSpanishActive ?  `Solo quedan ${stock} unidades en stock` : `Only ${stock} units left in stock`,
        { position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark" })
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       } else{
        toast.warning(isSpanishActive ? `No se puede poner menos de una copia` : `You can't buy less than 1 copy of a card`,
        {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark"})
       }
   }


   return(
       <div className='Counter'>    
            <div className='Controls'>
                <button className="DetailButton" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="DetailButton" onClick={increment}>+</button>
            </div>
            <div className='AddRemoveButtons'>
                <button className="DetailButton" onClick={() => {onAdd(quantity); setQuantity(1)}}>{(isSpanishActive ? "Añadir al Carro" : "Add to cart")}</button>
                <button className="DetailButton" onClick={() => removeCard(id)}>{(isSpanishActive ? "Remover del carro" : "Remove from cart")}</button>
            </div>
            <div>
                <Link to={"/Tienda-MTG"} className="DetailLink">{(isSpanishActive ? "Volver" : "Back")}</Link>
            </div>
       </div>
   )

}
export default ItemCount