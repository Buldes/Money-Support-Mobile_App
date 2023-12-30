import AsyncStorage from '@react-native-async-storage/async-storage';
import { currentUserData, setCurrentUserData } from '../variables/dictionary';
import { currentuserKey } from '../variables/string';

export const storeData = async (value, key) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
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

export function SaveCurrentUser(){
    storeData(currentUserData, currentuserKey)
}

export function GetCurrentData(){
    getData(currentuserKey).then((data) => {
        setCurrentUserData(data)
        return true
    })
}
