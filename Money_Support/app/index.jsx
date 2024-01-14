import React, { useState, useEffect } from 'react';
import MainMenu from './mainMenu';
import { BackHandler, View, Text } from 'react-native';
import BottomBar from '../components/fullComp/bottomBar';
import SettingsMenu from './settingmenu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCurrentUserKey } from '../variables/string';
import Setup from '../components/fullComp/SetupComp/setup';

const App = () => {
  const [menu, setMenu] = useState("MainMenu");
  const [status, setStatus] = useState(null)
  console.log(menu);

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
      backPressListener.remove(); // Event Listener rmove at Unmount
    };
  }, [menu]); 

  // get/check for current selected user
  const getCurrentUserKey = async () =>{
    await AsyncStorage.getItem("currentUser").then((data) => {
      setCurrentUserKey(data)
      if (data == null) setStatus("setup")
      else setStatus("menu")
    })
  }
  getCurrentUserKey()

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
        <Setup/>
      </View>
    )
  }
  else if (status == "menu"){
    return (
      <View style={{flex:1}}>
        {menu === "MainMenu" ? <MainMenu /> : <SettingsMenu />}

        <BottomBar menu={menu} settingsPress={() => setMenu("Settings")} homePress={() => setMenu("MainMenu")} />
      </View>
    )
  }
};

export default App;
