import React, { useEffect, useState, version } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import colorPallet from '../constants/Colors';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import SettingsContainerLayout from '../components/fullComp/settingsComp/containerLayout';
import UserSettings from '../components/fullComp/settingsComp/settingsUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PersonalizeSettings from '../components/fullComp/settingsComp/settingsPersonalize';
import languageDictionary from '../Functions/getLanguageDictionary';
import DefaultLabel from '../components/Lables/default';
import { appVersion, expoVersion } from '../variables/string';
import InfoBoxSettings from '../components/fullComp/settingsComp/infoBoxSettings';

const SettingsMenu = (props) => {
    const [allKeys, setAllKeys] = useState(null)
    const [loading, setLoading] = useState(true)
    const [relaod, setReload] = useState(false)
  
    const dictionary = languageDictionary()
    const infoFontSize = 10

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
    
    const ReloadObjects = () => {setReload(true)}
    // useEffect
    useEffect(() => {
      if (loading) GetAllUserKeys()
      if (relaod) setReload(false)
    }, [loading, relaod])
  
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
      <GestureHandlerRootView>
        <ScrollView alignItems="center"  style={{flex:1, marginTop:10, ...style.dark}}>

          <SettingsContainerLayout headline={dictionary["User"]} comp={<UserSettings allUserKeys={allKeys} BackToMainMenu={BackToMain}/>}/>
          <SettingsContainerLayout headline={dictionary["Personalize"]} comp={<PersonalizeSettings ReloadChanges={ReloadObjects}/>}/>
          <SettingsContainerLayout headline={dictionary["Info Box"]} comp={<InfoBoxSettings ReloadChanges={ReloadObjects}/>}/>

          <View style={{flex:1, marginTop:50, marginBottom:20, justifyContent:"flex-end"}}>
            <DefaultLabel text={`Money Support ${appVersion}`} backGround={colorPallet.transperent} fontSize={infoFontSize}/>
            <DefaultLabel text={`React Nativ V${version}  Expo V${expoVersion}`} backGround={colorPallet.transperent} fontSize={infoFontSize} marginBottom={5}/>
            <DefaultLabel text={`Language translation made with ChatGPT`} backGround={colorPallet.transperent} fontSize={infoFontSize} marginBottom={5}/>
            <DefaultLabel text={`You are in Early Acess! Please report error and bugs.\nMore features comming soon...`} backGround={colorPallet.transperent} fontSize={infoFontSize} marginBottom={5}/>
            <DefaultLabel text={`App testet and develop on Samsung Galaxy S20 FE`} backGround={colorPallet.transperent} fontSize={infoFontSize}/>
          </View>

        </ScrollView>
      </GestureHandlerRootView>
       <StatusBar style="light" backgroundColor={colorPallet.black}/>
     </View>

   );
};

const style = StyleSheet.create({
  screen: {
      flex: 1,
  }
})

export default SettingsMenu;