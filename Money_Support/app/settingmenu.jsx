import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import colorPallet from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import SettingsContainerLayout from '../components/fullComp/settingsComp/containerLayout';
import UserSettings from '../components/fullComp/settingsComp/settingsUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsMenu = (props) => {
    const [allKeys, setAllKeys] = useState(null)
    const [loading, setLoading] = useState(true)
  
    // declaration
    const GetAllUserKeys = async () => {
          await AsyncStorage.getAllKeys().then((data) => {
            data = data == undefined ? [`[ERROR] no user found`]: data.filter(item => item != "settings" && item != "currentUser")
            setAllKeys(data)
            console.log(`got ${data.length} userKeys: ${data}`)
            setLoading(false)
          })
      }
    
    const BackToMain = () => {
      props.SetMenu("MainMenu")
    }
    
    // useEffect
    useEffect(() => {
      if (loading) GetAllUserKeys()
    }, [loading])
  
    // check if loading
    if (loading){
      return (
        <View style={{flex:1, backgroundColor:colorPallet.black}}>
          <StatusBar style="light" backgroundColor={colorPallet.black}/>
        </View>
        )
    }

   return (
     <View style={{flex:1, backgroundColor:colorPallet.black}}> 
      <ScrollView alignItems="center"  style={{flex:1, marginTop:10, ...style.dark}}>

        <SettingsContainerLayout headline="User" comp={<UserSettings allUserKeys={allKeys} BackToMainMenu={BackToMain}/>}/>

       <StatusBar style="light" backgroundColor={colorPallet.black}/>

      </ScrollView>
     </View>

   );
};

const style = StyleSheet.create({
  screen: {
      flex: 1,
  }
})

export default SettingsMenu;