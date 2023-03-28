import { useParams } from "react-router-dom";
import CardRender from "../CardRender/CardRender";
import './CardsContainer.css';

const CardContainer = ({greeting}) => {

    const {rarityId} = useParams()

    return(
        <div className="CardContainer">
            <h1 style={{fontSize:50}}>{greeting} {rarityId}</h1>
            <CardRender/>
        </div>
    )
}

export default CardContainer