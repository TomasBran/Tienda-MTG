import { Link } from "react-router-dom"
import { useLanguage } from "../../context/LanguageContext"
import Swal from 'sweetalert2'


const Card = ({card}) => {

    const { isSpanishActive } = useLanguage()

    const zoomCardImage = () => {
        Swal.fire({
            imageUrl: card.img,
            imageHeight: 700,
            imageAlt: isSpanishActive ? card.name.spanish : card.name.english,
            background: '#ffffff00',
            showConfirmButton: false
        })
    }

    if(card!=="empty"){  


        return(

            <div className="IndividualCard">
                <h1 className="IndividualCardTitle">{(isSpanishActive ? card.name.spanish : card.name.english)}</h1>
                <img src={card.img} alt={card.name.english} onClick={zoomCardImage}/>
                <p>{(isSpanishActive ? "Precio: US" : "Price: ")}${(card.price).toFixed(2)}</p>
                
                <div className="CardButtons">
                    <Link to={`/card/${card.id}`} className="Button">{(isSpanishActive ? "Ver Detalles" : "See Details")}</Link>
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