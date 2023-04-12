import { useParams } from "react-router-dom";
import './CardsContainer.css';
import { getCardByRarity, getCards } from "../../asyncMock";
import { useEffect, useState, React } from 'react'
import Card from "../Cards/Cards";
import ReactLoading from 'react-loading';
import { useLanguage } from "../../context/LanguageContext";

const CardContainer = () => {

  const { isSpanishActive } = useLanguage()

    const [cards, setCards] = useState([])

    const {rarityId} = useParams()

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
              <div className="LoadingContainer">
                  <ReactLoading type="spin" color="#ffffff" height={350} width={250} />
              </div>
        )
      }

      const translateRarity = (rarity) =>{
          switch(rarity){
            case 'Comunes':
              return "Common"
            case 'Poco Comunes':
              return "Uncommon"
            case 'Raras':
              return "Rare"
            case 'Raras Míticas':
              return "Mythic Rare"
            default:
              return ""
          }
      }


    return(
        <div className="CardContainer">
            <h1 style={{fontSize:50}} className={rarityId || 'Welcome-Title'} >{(rarityId ? (isSpanishActive ? `Cartas ${rarityId}` : `${translateRarity(rarityId)} cards`) : (isSpanishActive ? "Bienvenido a la tienda" : "Welcome to the store"))}</h1>
            <div className="CardPanel">
                {cards.map((cardInfo, index) => (
                    <Card key={index} card={cardInfo}/>
                ))}
             </div>
        </div>
    )
}

export default CardContainer