import cart from './Assets/cart-logo.png'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { useNavigate } from 'react-router-dom'


const CartWidget = () => {

    const navigate = useNavigate()


    const { isSpanishActive } = useLanguage()

    const { totalQuantity } = useCart()
    const { totalMoney } = useCart()

    return (
        <div className="Navbar-title Cart-Widget" onClick={() => navigate("/cart")}>
            <img src={cart} alt="cart-logo" style={{height:45}}/>
            <div className='Cart-Info'>
                <p>{totalQuantity} {(isSpanishActive ? "cartas" : "cards")}</p>
                <p>{(isSpanishActive && "US")}${totalMoney.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartWidget