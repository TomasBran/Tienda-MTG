import { getCardByRarity, getCards } from "../../asyncMock";
import { useEffect, useState } from 'react'
import Card from "../Cards/Cards";
import { useParams } from "react-router-dom";


const CardRender = () => {

    const [cards, setCards] = useState([])

    const { rarityId } = useParams()


    useEffect(() => {
      setCards([])

      const asyncFunction = rarityId ? getCardByRarity : getCards

      asyncFunction(rarityId)
      .then(data => {
        setCards(data)
      })
      .catch(error => {
        console.log(error)
      })
    
    },[rarityId])

    
    if(cards[0]===undefined){
      return(
        <div style={{display:"flex", justifyContent:"center"}}>
          <img src="https://media.tenor.com/-n8JvVIqBXkAAAAM/dddd.gif" alt="loading-logo"/>

        </div>
      )
    }

    
    return (
        <div className="CardPanel">
            {cards.map((cardInfo, index) => (
                <Card key={index} card={cardInfo}/>
            ))}
        </div>
        )
    
}

export default  CardRender
