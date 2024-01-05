import { currentUserData, setNewEntry } from "../variables/dictionary";

function CreateNewData(state, amount){
    const multiplicaor = state == "Income" ? 1: state == "Expenditures" ? -1: 10
    const currentDate = new Date()
    const newData = {
        id:currentUserData[0].id + 1, 
        state:state, 
        date:{day:currentDate.getDate(), month:currentDate.getMonth() + 1, year:currentDate.getFullYear()},
        amount:amount,
        bankBalance:currentUserData[0].bankBalance + amount * multiplicaor
    }
    setNewEntry(newData)
}

export default CreateNewData;