import React, { useState } from 'react';
import MainMenu from './mainMenu';
import { View } from 'react-native';
import BottomBar from '../components/fullComp/bottomBar';
import SettingsMenu from './settingmenu';
const App = () => {

  const [menu, setMenu] = useState("MainMenu")
  console.log(menu)
  //const menu = "MainMenu" 
  return (
    <View style={{flex:1}}>
      {menu == "MainMenu" ? <MainMenu/>: <SettingsMenu/>}

      <BottomBar menu={menu} settingsPress={() => setMenu("Settings")} homePress={() => setMenu("MainMenu")}/>
    </View>
  )
}

export default App;