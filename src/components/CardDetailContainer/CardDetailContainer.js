import { useState, useEffect, React } from "react"
import { useParams, useNavigate } from "react-router-dom"
import CardDetail from "../CardDetail/CardDetail"
import './CardDetailContainer.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactLoading from 'react-loading';
import { useLanguage } from "../../context/LanguageContext"

import { db } from "../../service/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";


const CardDetailContainer = () => {
    const [card, setCard] = useState()
    const navigate = useNavigate();
    const {cardId} = useParams()
    const [wasCardChecked, setWasCardChecked] = useState(false)

    const { isSpanishActive } = useLanguage()

    useEffect(() =>{

        const cardRef = doc(db, "cardList", cardId)

        
        getDoc(cardRef)
            .then(snapshot => {
                const data = snapshot.data()
                const cardAdapted = {id: snapshot.id, ...data}

                if(cardAdapted.id!=="search"){
                    setCard(cardAdapted)
                }
                setWasCardChecked(true)
            })

    }, [cardId])

    if(card){
        return (
            <div className="CardDetailContainer">
                <CardDetail {...card} />
            </div>
        )

    } else{

        if(wasCardChecked){

            toast.warning(isSpanishActive ? `No se puede dejar vacía la búsqueda. Volverás al menú principal` : `Search cannot be empty. You will return to main menu`, {
                onClose: () => {
                    navigate("/Tienda-MTG");
                },
                position: "top-center", autoClose: false, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
            })
        }
            

        return(

            <div className="ErrorContainer">
                
                <ReactLoading type="spin" color="#ffffff" height={350} width={250} />

            </div>
        )
    }



}

export default CardDetailContainer