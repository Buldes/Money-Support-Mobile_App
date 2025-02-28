import { currentUserData, setCurrentUserData } from "../variables/dictionary";
import { SaveCurrentUser } from "./dataDealer";
import { SortById } from "./dictionarySorting";

function recalculateCurrentUserData(newData){
    //init
    var newData = SortById(newData).reverse()  
    var newUserData = []
    var bankBalance = 0
    var newID = 0
    // loop thro every element
    newData.forEach(element => {
        // calculate new bank balance
        if (element.state === "Expenditures"){
            bankBalance -= parseFloat(element.amount)
        }
        else if (element.state == "Income"){
            bankBalance += parseFloat(element.amount)
        }

        newUserData.push({"id":newID, "state":element.state, "date":element.date, "amount":element.amount, "bankBalance":bankBalance})

        // add one to new ID
        newID += 1
    });
    // return
    return SortById(newUserData)
}

export function deletOnID(id){
    var newUserData = []
    newUserData = SortById(currentUserData)
    newUserData.splice(-parseInt(id) + newUserData.length - 1, 1)
    newUserData = recalculateCurrentUserData(newUserData)
    setCurrentUserData(newUserData)
    SaveCurrentUser()
}

export function changeOnID(id, state, amount){
    var newUserData = SortById(currentUserData)
    var olData = newUserData[-parseInt(id) + newUserData.length - 1]

    // check for correct input
    if (isNaN(amount)) amount = 0


    // delete old
    newUserData.splice(-parseInt(id) + newUserData.length - 1, 1)
    // add new
    newUserData.push({"id":id, "state":amount != 0 ? state: "Stay", "date":olData.date, "amount":amount, "bankBalance":0})

    setCurrentUserData(recalculateCurrentUserData(newUserData))
    
    SaveCurrentUser()
}