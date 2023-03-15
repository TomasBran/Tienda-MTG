import cart from './Assets/cart-logo.png'


const CartWidget = () => {
    return (
        <div className="Navbar-title Cart-Widget">
            <img src={cart} alt="cart-logo" style={{height:75}}/>
            <p>$0.00</p>
            </div>
    )
}

export default CartWidget