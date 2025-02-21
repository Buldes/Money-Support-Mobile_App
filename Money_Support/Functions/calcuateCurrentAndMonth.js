import { currentUserData, infoLableSettings } from "../variables/dictionary"

async function CalculateExpendituresIcome(){

    // check if every value in infoLableSettings is false
    var keys = Object.keys(infoLableSettings)
    var result;
    for (i=0; i<9; i++) {
            result = infoLableSettings[keys[i]];
            if (result) {
                break;
            } 
        }
    if (!result) return [null, null, null, null]

    var calculatedCurrentExpenditures = 0
    var claculatedAvargeExpenditures = 0

    var calculatedCurrentIncome = 0
    var claculatedAvargeIncome = 0

    var totalMonth = 12

    var element = []
    const currentDate = new Date()
    //{"id":2, "state":"Expenditures", "date":{"day":currentDate.getDate(),"month":currentDate.getMonth() + 1,"year":currentDate.getFullYear()}, "amount":0.5, "bankBalance":0},
    try{
        for (let i = 0; i < currentUserData.length; i++){

            element = currentUserData[i]

            if (element["date"]["month"] == currentDate.getMonth() + 1){
                if (element["state"] == "Expenditures") calculatedCurrentExpenditures += element["amount"]
                else calculatedCurrentIncome += element["amount"]
            }

            else if (element["date"]["year"] == currentDate.getFullYear()){
                if (element["state"] == "Expenditures") claculatedAvargeExpenditures += element["amount"]
                else claculatedAvargeIncome += element["amount"]
            }

            else if (element["date"]["year"] != currentDate.getFullYear && element["date"]["month"] == currentDate.getMonth() + 1){
                if (element["state"] == "Expenditures") claculatedAvargeExpenditures += element["amount"]
                else claculatedAvargeIncome += element["amount"]
            }

            else if (element["date"]["year"] != currentDate.getFullYear()){
                break
            }
        }

        if (currentUserData[currentUserData.length - 1]["date"]["year"] == currentDate.getFullYear()){
             totalMonth = (currentDate.getMonth() + 1) - currentUserData[currentUserData.length - 1]["date"]["month"]
        }
        else {
            totalMonth = (currentDate.getMonth() + 1) - currentUserData[currentUserData.length - 1]["date"]["month"] + 12
        }

        if (totalMonth > 12) totalMonth = 12
        console.log(`Total Months: ${totalMonth}`)

        return [calculatedCurrentExpenditures, claculatedAvargeExpenditures / totalMonth, calculatedCurrentIncome, claculatedAvargeIncome / totalMonth]
    } catch {
        return [0, 0, 0, 0]
    }
}

export default CalculateExpendituresIcome