import { useState } from "react"
import ContactForm from "../ContactForm/ContactForm"
import { useCart } from "../../context/CartContext"
import { useLanguage } from "../../context/LanguageContext"
import { ToastContainer, toast } from "react-toastify"
import ReactLoading from 'react-loading';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import './Checkout.css'



const Checkout = () => {

    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const {cart, totalMoney, totalQuantity, clearCart } = useCart()
    const { isSpanishActive } = useLanguage()

    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState()

    const resetStock = async () => {

        const cardsRef = collection(db, 'cardList')
        const { docs } = await getDocs(cardsRef)
        const batch = writeBatch(db)

        docs.forEach(doc => {

            batch.update(doc.ref, { stock: 50})
            
        })

        batch.commit()

        toast.success(`Se resetearon los stocks para poder seguir testeando.`, {position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
        })


    }

    const createOrder = async (userData) => {
        try{
            setUserInfo(userData)
            setLoading(true)
            const objOrder = {
                buyer: userData,
                items: cart,
                totalQuantity,
                totalMoney
            }

            const ids = cart.map(card => card.id)

            const cardsRef = query(collection(db, 'cardList'), where(documentId(), "in", ids))

            const { docs } = await getDocs(cardsRef)

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock

                const cardAddedToCart = cart.find(card => card.id === doc.id)
                const cardQuantity = cardAddedToCart.quantity

                if(stockDB >= cardQuantity){
                    batch.update(doc.ref, { stock: (stockDB - cardQuantity)})
                } else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                
                batch.commit()

                const ordersRef = collection(db, "orders")

                const orderAdded = await addDoc(ordersRef, objOrder)

                setOrderId(orderAdded.id)

                
            } else{
                toast.error(isSpanishActive ? `Hay cartas que no quedan en stock. Se limpiará el carro para evitar errores y regresarás al menú principal.` : `There are selected cards with no stock left. Cart will be cleared to avoid errors and you will return to Main Menu.`, {
                    onClose: () => {
                        navigate("/Tienda-MTG");
                    },
                    position: "top-center", autoClose: false, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
                })
            }
            
            clearCart(true)


        }
        catch (error) {
            toast.error(isSpanishActive ? `Hubo un error generando la orden, por favor intente de nuevo` : `There was an error generating the order. Please try again.`, {
                position: "top-center", autoClose: false, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",
            })
        } finally {
            setLoading(false)
        }
    }
   
    
    if(orderId){
        Swal.fire({
            title: isSpanishActive ? `Has comprado exitosamente las cartas. Se te enviarán los datos de entrega al número de teléfono: ${userInfo.phone}` : `You successfully bought the cards for a total of $${totalMoney.toFixed(2)}. Delivery details will be sent to your phone number: ${userInfo.phone}`,
            showDenyButton: false,
            confirmButtonText: isSpanishActive ? 'CONTINUAR' : 'CONTINUE',
          }).then(() => 
            Swal.fire({
                title: isSpanishActive ? `${userInfo.name}, Tu ID de tu compra es: ${orderId}. Asegurate de guardarla. ¡Gracias por comprar en nuestra tienda!` : `${userInfo.name}, your order ID is ${orderId}. Make sure you save it. Thanks for buying in our store!`,
                showDenyButton: false,
                confirmButtonText: isSpanishActive ? 'VOLVER AL MENU PRINCIPAL' : 'BACK TO MAIN MENU',
            }).then(() => {
                    navigate("/Tienda-MTG");
            })
          )
            return(

                <div>
                    <ToastContainer/>
                    <ContactForm onConfirm={createOrder}/>
                </div>
              
        )
    }

    if(loading){
        return(
            <div className="ErrorContainer">
                
                <ReactLoading type="spin" color="#ffffff" height={350} width={250} />

            </div>
        )
    }

    return(
        <div>
            <ContactForm onConfirm={createOrder}/>

            {/* Comentar el siguiente div cuando no sea para corrección */}
            <div className="ResetContainer"> 
                 <button onClick={resetStock}>RESET STOCK</button>
            </div>
        </div>
    )
}

export default Checkout