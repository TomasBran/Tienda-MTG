import { createContext, useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import { useLanguage } from './LanguageContext';


export const CartContext = createContext('Valor Inicial')


export const CartProvider = ({ children }) => {

    const { isSpanishActive } = useLanguage()

    const [cart, setCart] = useState([])

    
    const addCard = (cardToAdd) => {
        if(!isInCart(cardToAdd.id)){
            setCart(prev => [...prev, cardToAdd])
            toast.success(isSpanishActive ? `Se añadieron ${cardToAdd.quantity} copia/s de ${cardToAdd.name.spanish} al carro.` : `${cardToAdd.quantity} copies of ${cardToAdd.name.english} were added to the cart.`,
            {position: "bottom-left", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark"})
        } else {
            toast.error(isSpanishActive ? `No se agregaron ${cardToAdd.quantity} copia/s de ${cardToAdd.name.spanish} porque ya hay copias en el carro. Elimina las existentes para volver a añadir.` : `${cardToAdd.quantity} copies of ${cardToAdd.name.english} weren't added because there are already existing copies in the cart. Delete them to add new ones.`, 
            {position: "bottom-right", autoClose: 7500, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark"})
        }
    }

    const isInCart = (id) => {
        return cart.some(card => card.id === id)
    }

    const removeCard = (id) => {

        const card = cart.find(card => card.id === id)
        
        if(!card){
            toast.warning(isSpanishActive ? `No hay copias de esta carta en el carro para eliminar.` : `There are no copies of this card in the cart.`, 
            {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark"})
            return
        }


        Swal.fire({
            title: isSpanishActive ? `¿Quieres borrar ${card.quantity} copias de ${card.name.spanish} del carro?` : `Do you want to delete ${card.quantity} copies of ${card.name.english} from cart?`,
            showDenyButton: true,
            confirmButtonText: isSpanishActive ? 'ELIMINAR' : 'DELETE',
            denyButtonText: isSpanishActive ? `CANCELAR` : 'CANCEL',
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(isSpanishActive ? `Cartas eliminadas.` : `Cards deleted.`, ``, 'success')
                toast.success(isSpanishActive ? `Se eliminaron ${card.quantity} copia/s de ${card.name.spanish} del carro.` : `${card.quantity} copies of ${card.name.english} were deleted from cart.`,
                {position: "bottom-left", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark"})
                const updatedCart = cart.filter(card => card.id !== id)
                setCart(updatedCart)
            }
          })


    }

    const clearCart = (askForConfirmation) => {

        if(askForConfirmation === true){
            setCart([])
            return
        }

        if(cart.length===0){
            toast.warning(isSpanishActive ? `El carro ya está vacío` : `Cart is already empty.`,
                {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark"})
        } else{

            
            Swal.fire({
                title: isSpanishActive ? `¿Quieres vaciar el carro?` : `Do you want to empty the cart?`,
                showDenyButton: true,
                confirmButtonText: isSpanishActive ? 'VACIAR' : 'EMPTY',
                denyButtonText: isSpanishActive ? `CANCELAR` : 'CANCEL',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(isSpanishActive ? `Carro vacío.` : `Cart is now empty.`, ``, 'success')
                    setCart([])
                }
            })
        }
    }



    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach( card => {
            totalQuantity += card.quantity
        })

        return totalQuantity
    }

    const getTotalMoney = () => {
        let totalMoney = 0

        cart.forEach( card => {
            totalMoney += card.price*card.quantity
        })

        return totalMoney
    }

    const totalQuantity = getTotalQuantity()
    const totalMoney = getTotalMoney()

        return (
            <CartContext.Provider value={{cart, addCard, removeCard, clearCart, totalQuantity, totalMoney}}>
                <ToastContainer/>
                { children }
            </CartContext.Provider>
        )
}

export const useCart = () => {
    return useContext(CartContext)
}