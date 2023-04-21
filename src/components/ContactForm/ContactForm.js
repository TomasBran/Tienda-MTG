import { useState } from "react"
import './ContactForm.css'
import { useLanguage } from "../../context/LanguageContext"


const ContactForm = ({onConfirm}) => {

    const { isSpanishActive } = useLanguage()
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = () => {
        const userData = {
            name, email, phone
        }

        onConfirm(userData)
    }

    return(
        <form className="Contact-Form" onSubmit={(event) => {handleSubmit(); event.preventDefault()}}>
            <h2>{isSpanishActive ? "Ingrese sus datos" : "Enter your contact detail"}:</h2>
            <input value={name} onChange={(e)=> setName(e.target.value)} placeholder={isSpanishActive ? "Nombre" : "Name"} required/>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder={isSpanishActive ? "Dirección de correo" : "e-Mail address"} required/>
            <input type="number" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder={isSpanishActive ? "Número de teléfono" : "Phone number"} required/>
            <button className="Confirm-Button">{isSpanishActive ? "Confirmar compra" : "Confirm Buy"}</button>            
        </form>
    )
}

export default ContactForm