import { useEffect, useState, React } from "react"
import CardDetail from "../CardDetail/CardDetail"
import { useParams } from "react-router-dom"
import ReactLoading from 'react-loading';
import { useLanguage } from "../../context/LanguageContext";

import { db } from "../../service/firebase/firebaseConfig";
import { getDocs, collection, query, where, FieldPath } from "firebase/firestore";

const SearchDetailedItem = () => {
    
    const {cardName} = useParams()

    const [card, setCard] = useState()
    
    const [foundCard, setFoundCard] = useState(true)

    const { isSpanishActive } = useLanguage()

    const { currentLanguage } = useLanguage()
    

    useEffect(() => {
        setCard()

        
        const currentName = new FieldPath("name", currentLanguage)

        const cardsRef = query(collection(db, 'cardList'), where(currentName, "==", cardName.toLowerCase()))
        
        getDocs(cardsRef)
          .then(snapshot => {
            const cardsAdapted = snapshot.docs.map(doc => {
              const data = doc.data()
              return {id: doc.id, ...data}
            })
            setCard(cardsAdapted[0])
            setFoundCard(cardsAdapted.length === 0 ? false : true)
            
          })
          .catch(error => {
            console.log(error)
          })
          .finally(
            setFoundCard(true)
          )
      
      },[cardName, currentLanguage])



    if(card){
        return (
            <div className="CardDetailContainer">
                <CardDetail {...card} />
            </div>
        )

    } else if(!foundCard){
        return (
            <div className="ErrorContainer">
                <p className="ErrorText">{(isSpanishActive ? `NO SE ENCONTRÓ LA CARTA "${cardName.toUpperCase()}".` : `"${cardName.toUpperCase()}" WAS NOT FOUND.`)}</p>
                <p className="ErrorText2">{(isSpanishActive ? "*La búsqueda debe ser en español." : "*The search must be in english.")}</p>
            </div>
        )

    } else
    {
            return(
                <div className="LoadingContainer">
                    <ReactLoading type="spin" color="#ffffff" height={350} width={250} />
                </div>
            )   

       
    }

    
}

export default SearchDetailedItem