import en from "../Locals/en.json"
import de from "../Locals/de.json"
import { language } from "../variables/string"

function languageDirectory(){
    if (language == "en") return en
    else if (language == "de") return de
}

export default languageDirectory;