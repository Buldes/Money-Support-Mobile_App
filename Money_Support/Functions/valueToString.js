import { currency } from "../variables/string";

function ValueToString(value){
    return value.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: currency})
}

export default ValueToString;