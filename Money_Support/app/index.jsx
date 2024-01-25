import React, { useState, useEffect } from 'react';
import MainMenu from './mainMenu';
import { BackHandler, View, Text } from 'react-native';
import BottomBar from '../components/fullComp/bottomBar';
import SettingsMenu from './settingmenu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { currentuserKey, setCurrentUserKey } from '../variables/string';
import Setup from '../components/fullComp/SetupComp/setup';
import { ClearAllData, RefreshSettings } from '../Functions/dataDealer';

const App = () => {
  const [menu, setMenu] = useState("MainMenu");
  const [status, setStatus] = useState(null)
  console.log(menu)
  //ClearAllData()
  // add BackHandler, to return to main Menu, when seng is open
  const handleBackPress = () => {
    if (menu === "Settings") {
      setMenu("MainMenu");
      return true;
    }
    BackHandler.exitApp();
    return false;
  };
  useEffect(() => {
    const backPressListener = BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      backPressListener.remove(); // Event Listener remove at Unmount
    };
  }, [menu]); 

  // get/check for current selected user
  const getCurrentUserKey = async () =>{
    await AsyncStorage.getItem("currentUser").then( async (data) => {
      if (data == null) {
        setStatus("setup")
        return
      }
      else {
        setCurrentUserKey(data)
        console.log(`Getting UserKey Value ${currentuserKey}`)
        await RefreshSettings().then(() => {
          setStatus("menu")
        })
      }
    })
  }
  getCurrentUserKey()

  // get Settings

  if (status == null){
    return(
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  else if (status == "setup"){
    return(
      <View style={{flex:1}}>
        <Setup setupFinish={() => setStatus(null)}/>
      </View>
    )
  }
  else if (status == "menu"){
    return (
      <View style={{flex:1}}>
        {menu === "MainMenu" ? <MainMenu /> : <SettingsMenu/>}

        <BottomBar menu={menu} settingsPress={() => setMenu("Settings")} homePress={() => setMenu("MainMenu")} />
      </View>
    )
  }
};

export default App;
