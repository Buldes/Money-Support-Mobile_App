import en from "../Locals/en.json"
import de from "../Locals/de.json"
import es from "../Locals/es.json"
import fr from "../Locals/fr.json"
import ita from "../Locals/ita.json"
import pt from "../Locals/pt.json"
import ru from "../Locals/ru.json"
import pl from "../Locals/pl.json"
import ar from "../Locals/ar.json"
import hi from "../Locals/hi.json"
import bn from "../Locals/bn.json"
import zh from "../Locals/zh.json"
import ja from "../Locals/ja.json"
import { language } from "../variables/string"

function languageDictionary(){
    if (language == "en") return en
    else if (language == "de") return de
    else if (language == "es") return es
    else if (language == "fr") return fr
    else if (language == "ita") return ita
    else if (language == "pt") return pt
    else if (language == "ru") return ru
    else if (language == "pl") return pl
    else if (language == "ar") return ar
    else if (language == "hi") return hi
    else if (language == "bn") return bn
    else if (language == "zh") return zh
    else if (language == "ja") return ja
}

export default languageDictionary;