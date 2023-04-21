import ItemCount from "../CardCount/CardCount"
import '../CardDetail/CardDetail.css'
import { useCart } from "../../context/CartContext"
import { useLanguage } from "../../context/LanguageContext";
import Swal from "sweetalert2";

const CardDetail = ({id, name, img, description, cardType, price, stock}) => {


    

    const {addCard} = useCart();
    const { isSpanishActive } = useLanguage();
  
    const zoomCardImage = () => {
      Swal.fire({
          imageUrl: img,
          imageHeight: 700,
          imageAlt: isSpanishActive ? name.spanish : name.english,
          background: '#ffffff00',
          showConfirmButton: false
      })
  }

    const handleOnAdd = (quantity) => {
        const cardToAdd = {
          id, name, price, quantity
        }
        addCard(cardToAdd)
    }


    if(id!==undefined){
      return (
        <article className='CardInfo'>
            <header className='Header'>
              <h2 className='CardHeader'>
                {isSpanishActive ? name.spanish : name.english}
              </h2>
            </header>

            <picture>
              <img src={img} alt={name.english} className="CardImg" onClick={zoomCardImage}/>
            </picture>

            <section>
              
              <p className='Info'>
                {isSpanishActive ? cardType.spanish : cardType.english}
              </p>
              <h3 className='Info'>
                {isSpanishActive ? description.spanish : description.english}
              </h3>
              <p className='Info'>
                {(isSpanishActive ? "Precio: US" : "Price: ")}${price.toFixed(2)}
              </p>
              <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} id={id}/>
              </footer>

            </section>
        </article>
      )
    } else{
      return(
        <></>
      )
    }

}

export default CardDetail