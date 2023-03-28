import './Navbar.css'
import '../Button/Button.css'
import logo from './Assets/logo.png'
import CartWidget from '../CartWidget/CartWidget.js'
import { useState } from 'react'
import { Link, NavLink, Navigate } from "react-router-dom"

const Navbar = () => {

    const [input, setInput] = useState('')

    return (


        <nav className="Navbar">
            <div className="Navbar-title">
            <img className="MTG-Logo" src={logo} alt="logo" style={{height:100}}/>
            <Link className='Title-Link' to="/Tienda-MTG" style={{color:"white"}}>Tienda MTG</Link>
            </div>

            <div className="Button-Container">
                <NavLink to="/rarity/Comunes" className={({ isActive }) => isActive ? 'ActiveNavButton' : 'NavButton'}>Comunes</NavLink>
                <NavLink to="/rarity/Poco Comunes" className={({ isActive }) => isActive ? 'ActiveNavButton' : 'NavButton'}>Poco Comunes</NavLink>
                <NavLink to="/rarity/Raras" className={({ isActive }) => isActive ? 'ActiveNavButton' : 'NavButton'}>Raras</NavLink>
                <NavLink to="/rarity/Raras Míticas" className={({ isActive }) => isActive ? 'ActiveNavButton' : 'NavButton'}>Raras Míticas</NavLink>
                <NavLink to="/Tienda-MTG" className={({ isActive }) => isActive ? 'ActiveNavButton' : 'NavButton'}>Todas</NavLink>
            </div>


            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
                <Link className='NavButton' to={`/card/search/${input}`}>Buscar</Link>
            </div>
    

            <CartWidget/>
            
            
        </nav>
    )
}

export default Navbar