import React, { useState, useEffect } from 'react';
import MainMenu from './mainMenu';
import { BackHandler, View } from 'react-native';
import BottomBar from '../components/fullComp/bottomBar';
import SettingsMenu from './settingmenu';

const App = () => {
  const [menu, setMenu] = useState("MainMenu");
  console.log(menu);


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

  return (
    <View style={{flex:1}}>
      {menu === "MainMenu" ? <MainMenu /> : <SettingsMenu />}

      <BottomBar menu={menu} settingsPress={() => setMenu("Settings")} homePress={() => setMenu("MainMenu")} />
    </View>
  );
};

export default App;
