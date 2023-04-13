import { useParams } from "react-router-dom";
import './CardsContainer.css';
import { useEffect, useState, React } from 'react'
import Card from "../Cards/Cards";
import ReactLoading from 'react-loading';
import { useLanguage } from "../../context/LanguageContext";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const CardContainer = () => {

  const { isSpanishActive } = useLanguage()

    const [cards, setCards] = useState([])

    const {rarityId} = useParams()

    useEffect(() => {
      setCards([])

      const cardsRef = rarityId
      ? query(collection(db, 'cardList'), where('rarity', "==", rarityId))
      : collection(db, 'cardList')
      
      getDocs(cardsRef)
        .then(snapshot => {
          const cardsAdapted = snapshot.docs.map(doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
          })
          setCards(cardsAdapted)
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