import { getCardBySearchName } from "../../asyncMock"
import { useEffect, useState, React } from "react"
import CardDetail from "../CardDetail/CardDetail"
import { useParams } from "react-router-dom"
import ReactLoading from 'react-loading';
import { useLanguage } from "../../context/LanguageContext";

const SearchDetailedItem = () => {
    
    const {cardName} = useParams()

    const [card, setCard] = useState()
    
    const [foundCard, setFoundCard] = useState(true)

    const { isSpanishActive } = useLanguage()
    
    
    useEffect(() =>{
        setCard()
        getCardBySearchName(cardName).then(response =>{
            if(response==="not found"){
                setFoundCard(false)
            } else{
                setCard(response)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }, [cardName])

    if(card){
        return (
            <div className="CardDetailContainer">
                <CardDetail {...card} />
            </div>
        )

    } else if(!foundCard){
        return (
            <div className="ErrorContainer">
                <p className="ErrorText">{(isSpanishActive ? `NO SE ENCONTRÓ LA CARTA "${cardName.toUpperCase()}"` : `"${cardName.toUpperCase()}" WAS NOT FOUND`)}</p>
                <p style={{textAlign:"center", color:"#b1b1b1"}}>{(isSpanishActive && "*Recordá que el nombre original debe ser en inglés, como en la carta impresa")}</p>
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