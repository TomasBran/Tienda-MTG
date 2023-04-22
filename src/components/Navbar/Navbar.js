import './Navbar.css'
import '../Button/Button.css'
import logo from './Assets/logo.png'
import CartWidget from '../CartWidget/CartWidget.js'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useLanguage } from '../../context/LanguageContext'

const Navbar = () => {

    
    const [input, setInput] = useState('')
    
    const { isSpanishActive } = useLanguage()
    const navigate = useNavigate()
    
    

    return (

        <nav className="Navbar">
            <div className="Navbar-title">
            <img className="MTG-Logo" src={logo} alt="logo"/>
            <Link className='Title-Link' to="/Tienda-MTG" style={{color:"white"}}>{(isSpanishActive ? "Tienda MTG" : "MTG Store")}</Link>
            </div>

            <div className="Button-Container">
                <NavLink to="/rarity/Comunes" className={({ isActive }) => isActive ? 'ActiveNavButton' : 'NavButton'}>{(isSpanishActive ? "Comunes" : "Common")}</NavLink>
                <NavLink to="/rarity/Poco Comunes" className={({ isActive }) => isActive ? 'ActiveNavButton' : 'NavButton'}>{(isSpanishActive ? "Poco Comunes" : "Uncommon")}</NavLink>
                <NavLink to="/rarity/Raras" className={({ isActive }) => isActive ? 'ActiveNavButton' : 'NavButton'}>{(isSpanishActive ? "Raras" : "Rare")}</NavLink>
                <NavLink to="/rarity/Raras Míticas" className={({ isActive }) => isActive ? 'ActiveNavButton' : 'NavButton'}>{(isSpanishActive ? "Raras Míticas" : "Mythic Rare")}</NavLink>
                <NavLink to="/Tienda-MTG" className={({ isActive }) => isActive ? 'ActiveNavButton' : 'NavButton'}>{(isSpanishActive ? "Mostrar todas" : "Show all")}</NavLink>
            </div>


            <form onSubmit={(event) => { event.preventDefault(); navigate(`/card/search/${input}`); setInput("")}}>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={(isSpanishActive ? "Nombre de la carta" : "Card name")}/>
                <button className='NavButton SearchButton' >{(isSpanishActive ? "Buscar" : "Search")}</button>
            </form>
    

            <CartWidget/>
            
            
        </nav>
    )
}

export default Navbar