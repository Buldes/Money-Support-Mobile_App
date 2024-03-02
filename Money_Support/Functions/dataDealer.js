import AsyncStorage from '@react-native-async-storage/async-storage';
import { currentUserData, setCurrentUserData } from '../variables/dictionary';
import { SetNumLayout, currency, currentuserKey, language, numLayout, setCurrency, setLanguage } from '../variables/string';

export const storeData = async (value, key) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue).then((e) => {
        return e
      });
    } catch (e) {
        console.error(e)
        return e
    }
  };
export const getData = async (key) => {
   try {
     const jsonValue = await AsyncStorage.getItem(key)
     return JSON.parse(jsonValue);
   } catch (e) {
    console.error(e)
    return e
   }
 };

export async function SaveCurrentUser(){
    await storeData(currentUserData, currentuserKey).then((e) => {
      return e
    })
}

export function GetCurrentData(){
    getData(currentuserKey).then((data) => {
        setCurrentUserData(data)
        return true
    })
}

export async function SaveSettings(){
  let settingsList = {
    "language":language,
    "currency":currency,
    "numLayout":numLayout
  }
  await storeData(settingsList, "settings").then((e) => {
    return e
  })
}

export async function RefreshSettings(){
  await getData("settings").then((data) => {{
    setLanguage(data["language"])
    setCurrency(data["currency"])
    SetNumLayout(data["numLayout"])
  }})
}

export async function SaveCurrentUserKey(){
  await AsyncStorage.setItem("currentUser", currentuserKey).then((e) => {
    return e
  })
}

export async function DeleteCurrentUserKey(){
  await AsyncStorage.removeItem("currentUser").then((e) => {
    if (e != undefined) console.log(e)
    console.log("Deleted User")
  })
}

export async function ClearAllData(){
  await AsyncStorage.clear()
}
