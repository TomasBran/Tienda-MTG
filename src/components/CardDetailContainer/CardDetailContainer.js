import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCardById } from "../../asyncMock"
import CardDetail from "../CardDetail/CardDetail"
import './CardDetailContainer.css'


const CardDetailContainer = () => {
    const [card, setCard] = useState()

    const {cardId} = useParams()

    useEffect(() =>{
        getCardById(cardId).then(response =>{
            setCard(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [cardId])

    if(card){
        return (
            <div className="CardDetailContainer">
                <CardDetail {...card} />
            </div>
        )

    } else{
        return(

            <div style={{display:"flex", justifyContent:"center", marginTop:125}}>
                <img src="https://media.tenor.com/-n8JvVIqBXkAAAAM/dddd.gif" alt="loading-logo"/>

            </div>
        )
    }



}

export default CardDetailContainer