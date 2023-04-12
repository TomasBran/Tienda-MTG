import './LanguageButtons.css'
import { useLanguage } from '../../../context/LanguageContext';

const LanguageButtons = () => {

    const { currentLanguage } = useLanguage();
    const { setSpanish } = useLanguage();
    const { setEnglish } = useLanguage();


    return(
        <div className="LanguageButtons">
              <button className={`SpanishButton ${currentLanguage==="spanish" ? "ActiveLanguage" : ""}`} onClick={() => setSpanish()}>ESP</button>
              <button className={`EnglishButton ${currentLanguage==="english" ? "ActiveLanguage" : ""}`} onClick={() => setEnglish()}>ENG</button>
        </div>
    )
}

export default LanguageButtons