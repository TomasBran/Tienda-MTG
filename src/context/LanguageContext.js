import { createContext, useContext, useState } from "react"


export const LanguageContext = createContext("Initial Value")

export const LanguageProvider =({ children }) => {


    const [currentLanguage, setCurrentLanguage] = useState("english")
    const [isSpanishActive, setIsSpanishActive] = useState(false)


    const setSpanish = () => {
        setCurrentLanguage("spanish")
        setIsSpanishActive(true)
    }
    
    const setEnglish = () => {
        setCurrentLanguage("english")
        setIsSpanishActive(false)
    }


    return(
        <LanguageContext.Provider value={{setEnglish, setSpanish, currentLanguage, isSpanishActive}}>
            {children}
        </LanguageContext.Provider>
    )



}

export const useLanguage = () => {
    return useContext(LanguageContext)
}