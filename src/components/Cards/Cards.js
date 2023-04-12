import { Link } from "react-router-dom"
import { useLanguage } from "../../context/LanguageContext"


const Card = ({card}) => {

    const { currentLanguage } = useLanguage()
    if(card!=="empty"){  


        return(

            <div className="IndividualCard">
                <h1>{(currentLanguage==="spanish" ? card.name.spanish : card.name.english)}</h1>
                <img src={card.img} alt={card.name.english} />
                <p>{(currentLanguage==="spanish" ? "Precio: US" : "Price: ")}${(card.price).toFixed(2)}</p>
                
                <div className="CardButtons">
                    <Link to={`/card/${card.id}`} className="Button">{(currentLanguage==="spanish" ? "Ver Detalles" : "See Details")}</Link>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>

            </div>
        )
    }
}

export default Card