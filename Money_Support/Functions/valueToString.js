import { currency, numLayout } from "../variables/string";

function ValueToString(value, layout=numLayout){
    let num = value
    return num.toLocaleString(layout, {minimumFractionDigits: 2, maximumFractionDigits: 2, style: 'currency', currency: currency})
}

export default ValueToString;