import ItemCount from "../CardCount/CardCount"
import '../CardDetail/CardDetail.css'

const CardDetail = ({id, name, img, description, cardType, price, stock}) => {

    const handleOnAdd = (quantity) => {
        const cardToAdd = {
          id, name, price, quantity
        }
    }

    if(id!==undefined){
      return (
        <article className='CardInfo'>
            <header className='Header'>
              <h2 className='CardHeader'>
                {name}
              </h2>
            </header>

            <picture>
              <img src={img} alt={name} className="CardImg"/>
            </picture>

            <section>
              
              <p className='Info'>
                {cardType.spanish}
              </p>
              <h3 className='Info'>
                {description.spanish}
              </h3>
              <p className='Info'>
                Precio: US${price.toFixed(2)}
              </p>
              <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
              </footer>

            </section>
        </article>
      )
    } else{
      return(
        <></>
      )
    }





    // const {cardId} = useParams();

    // const [cards, setCards] = useState([])

    // useEffect(() => {
    //   getCards()
    //   .then(data => {
    //     setCards(data)
    //   })
    
    // },[])

    // if(cards[0]===undefined){
    //   return(
    //     <div style={{display:"flex", justifyContent:"center"}}>
    //       <img src="https://media.tenor.com/-n8JvVIqBXkAAAAM/dddd.gif" alt="loading-logo"/>

    //     </div>
    //   )
    // }
    
    // return (
        
    //         <div className="CardPanel">
    //           <Card card={cards[cardId-1]}/>
    //         </div>
    //       ) 

}

export default CardDetail