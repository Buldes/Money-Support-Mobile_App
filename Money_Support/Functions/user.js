import AsyncStorage from "@react-native-async-storage/async-storage";
import { currentuserKey, setCurrentUserKey } from "../variables/string";
import { currentUserData } from "../variables/dictionary";
import { SaveCurrentUser, SaveCurrentUserKey, storeData } from "./dataDealer";

export async function RenameCurrentUserKey(newName){
    console.log(`\nRename user "${currentuserKey}" to "${newName}"`)

    console.log(`Storing data from "${currentuserKey}" in new UserName "${newName}" ...`)
    await storeData(currentUserData, newName).then(async () => {

        console.log("Removing old key...")
        await AsyncStorage.removeItem(currentuserKey).then(async() => {

            console.log(`Save item CurrentUserKey with value "${newName}"`)
            setCurrentUserKey(newName)
            await SaveCurrentUserKey().then(() => {
                console.log("Process finished!")
                return true
            })
        })
    })
}

export async function DeleteCurrentUserData(){
    console.log(`\nDelete User "${currentuserKey}"`)

    await AsyncStorage.removeItem(currentuserKey).then(() => {
        return true
    })
}

export async function ChangeCurrentUserKey(){
    console.log(`\nChange CurrentUserKey`)

    console.log("Getting all User-Keys")
    await AsyncStorage.getAllKeys().then(async (data) => {
        data = data.filter(item => item != "settings" && item != "currentUser")

        console.log(`Got ${data.length} Entrys. Changing currentUserKey to "${data[0]}"`)
        
        setCurrentUserKey(data[0])
        await SaveCurrentUserKey().then(() => {
            return true
        })
    })
}