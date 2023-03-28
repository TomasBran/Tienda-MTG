import { getCardBySearchName } from "../../asyncMock"
import { useEffect, useState } from "react"
import CardDetail from "../CardDetail/CardDetail"
import { useParams } from "react-router-dom"

const SearchDetailedItem = () => {
    
    const {cardName} = useParams()

    const [card, setCard] = useState()
    
    
    const searchInputValue = cardName;
    
    useEffect(() =>{
        setCard()
        getCardBySearchName(searchInputValue).then(response =>{
            setCard(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [searchInputValue])

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

export default SearchDetailedItem