import './Navbar.css'
import logo from './Assets/logo.png'
import CartWidget from '../CartWidget/CartWidget.js'
import Button from '../Button/Button.js'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="Navbar-title">
            <img className="MTG-Logo" src={logo} alt="logo" style={{height:100}}/>
            <h1 style={{color:"white"}}>Tienda MTG</h1>
            </div>

            <div className="Button-Container">
                <Button label="Cartas Comunes"/>
                <Button label="Cartas Poco comunes"/>
                <Button label="Cartas Raras"/>
                <Button label="Cartas Raras Míticas"/>
            </div>

            <CartWidget/>
            
            
        </nav>
    )
}

export default Navbar