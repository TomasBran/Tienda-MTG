import { Link } from "react-router-dom"


const Card = ({card}) => {

    if(card!=="empty"){  
        return(

            <div className="IndividualCard">
                <h1>{card.name}</h1>
                <img src={card.img} alt={card.name} />
                <p>Precio: US${(card.price).toFixed(2)}</p>
                
                <div className="CardButtons">
                    <Link className="Button">Comprar</Link>
                    <Link to={`/card/${card.id}`} className="Button">Detalles</Link>
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