import { useState } from 'react'
import { Link } from 'react-router-dom'
import './CardCount.css'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div className='Counter'>          
            <div className='Controls'>
                <button className="DetailButton" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="DetailButton" onClick={increment}>+</button>
            </div>
            <div>
                <button className="DetailButton" onClick={() => onAdd(quantity)}>Añadir al Carro</button>
            </div>
            <div>
                <Link to={"/Tienda-MTG"} className="DetailLink">Volver</Link>
            </div>
       </div>
   )

}
export default ItemCount