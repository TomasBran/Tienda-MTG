import { useEffect, useState } from 'react'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import './Cart.css'
import logo from './assets/trashcan.png'
import { Link } from "react-router-dom"

const Cart = () => {

    const { isSpanishActive } = useLanguage()

    const [isCartEmpty, setIsCartEmpty] = useState(true)

    const {cart, totalMoney, totalQuantity, removeCard, clearCart} = useCart()


    useEffect(() => {
        if(cart.length===0){
            setIsCartEmpty(true)
        } else{
            setIsCartEmpty(false)
        }
    
    }, [cart])
    

   
    
    return(
        <div className="Cart-Container">
            <div className='Cart-Title'>
                <p>{(isSpanishActive ? "Nombre" : "Name")}</p>
                <p>{(isSpanishActive ? "Cantidad" : "Quantity")}</p>
                <p>{(isSpanishActive ? "Precio Unitario" : "Unit Price")}</p>
                <p>{(isSpanishActive ? "Borrar" : "Delete")}</p>
            </div>
            {cart.map((card) => (
                <div className='Cart-Individual-Item' key={card.id}>
                    <p className='Cart-Card-Title'>{(isSpanishActive ? card.name.spanish : card.name.english)}</p>
                    <p>{card.quantity}</p>
                    <p>{(isSpanishActive && "US")}${(card.price).toFixed(2)}</p>
                    <div>
                        <img src={logo} alt="logo" style={{width:30}} onClick={() => removeCard(card.id)}/>
                    </div>
                </div>
        
             ))}
             <div className='Cart-Total'>
                <p>Total:</p>
                <p>{totalQuantity}</p>
                <p>{(isSpanishActive && "US")}${totalMoney.toFixed(2)}</p>
                <div>
                    <img src={logo} alt="logo" style={{width:30}} onClick={clearCart}/>
                </div>
             </div>
             <div className='Cart-Buttons-Container'>
                <Link className='Cart-Button' to="/Tienda-MTG" style={{color:"white"}}>{(isSpanishActive ? "Volver" : "Back")}</Link>
                <Link className={isCartEmpty ? 'disabled-Cart-Button' : 'Cart-Button'} to={isCartEmpty ? "/cart" : "/checkout"}>{(isSpanishActive ? "Comprar" : "Buy")}</Link>
             </div>

        </div>
    )
}

export default Cart